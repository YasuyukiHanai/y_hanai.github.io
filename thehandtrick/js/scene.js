// Setting scene for 3D Object
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var vector = new THREE.Vector3();
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Creating 3D object
// var geometry = new THREE.BoxGeometry(1, 2, 1);
// var material = new THREE.MeshBasicMaterial({
//   color: "rgb(3, 197, 221)",
//   wireframe: true,
//   wireframeLinewidth: 2
// });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// var geometry = new THREE.SphereGeometry( 1.1, 32, 32 );
// var material = new THREE.MeshBasicMaterial({
//   color: "rgb(3, 197, 221)",
//   wireframe: true,
//   wireframeLinewidth: 2
// });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);


var loader = new THREE.MTLLoader();
var cube = new THREE.Object3D();
var geometry = new THREE.BufferGeometry();
ambient = new THREE.AmbientLight(0xffffff);
loader.load('12190_Heart_v1_L3.mtl', function(materials){
  materials.preload();
  var material = new THREE.OBJLoader();
  material.setMaterials(materials);
  material.load('12190_Heart_v1_L3.obj', function(object){
    object.scale.set(.04, .04, .04);
    cube.add(object);
    console.log(cube)
    cube.rotation.x = -1.5;
    cube.rotation.y = 0;
  });
});
scene.add(cube);
scene.add(ambient);
camera.position.z = 5;

// Optional animation to rotate the element
var animate = function() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.04;
  cube.rotation.z += 0.04;
  renderer.render(scene, camera);
};

animate();

// Creating Canavs for video Input
const video = document.getElementById("myvideo");
const handimg = document.getElementById("handimage");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let trackButton = document.getElementById("trackbutton");
let updateNote = document.getElementById("updatenote");

let imgindex = 1;
let isVideo = false;
let model = null;

// Params to initialize Handtracking js
const modelParams = {
  flipHorizontal: true,
  maxNumBoxes: 2,
  iouThreshold: 0.5,
  scoreThreshold: 0.7
};

handTrack.load(modelParams).then(lmodel => {
  model = lmodel;
  updateNote.innerText = "Loaded Model!";
  // trackButton.disabled = false;
  toggleVideo();
});

// Method to start a video
function startVideo() {
  handTrack.startVideo(video).then(function(status) {
    if (status) {
      updateNote.innerText = "Video started. Now tracking";
      isVideo = true;
      runDetection();
    } else {
      updateNote.innerText = "Please enable video";
    }
  });
}

// Method to toggle a video
function toggleVideo() {
  if (!isVideo) {
    updateNote.innerText = "Starting video";
    startVideo();
  } else {
    updateNote.innerText = "Stopping video";
    handTrack.stopVideo(video);
    isVideo = false;
    updateNote.innerText = "Video stopped";
  }
}

//Method to detect movement
function runDetection() {
  model.detect(video).then(predictions => {
    model.renderPredictions(predictions, canvas, context, video);
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
    if (predictions.length > 0) {
      changeData(predictions[0].bbox);
      if(cube) cube.visible = true;
    } else {
      if(cube) cube.visible = false;
    }
  });
}

//Method to Change prediction data into useful information
function changeData(value) {
  let midvalX = value[0] + value[2] / 2;
  let midvalY = value[1] + value[3] / 2;

  document.querySelector(".hand-1 #hand-x span").innerHTML = midvalX;
  document.querySelector(".hand-1 #hand-y span").innerHTML = midvalY;

  moveTheBox({ x: (midvalX - 300) / 600, y: (midvalY - 250) / 500 });
}

//Method to use prediction data to render cude accordingly
function moveTheBox(value) {
  cube.position.x = ((window.innerWidth * value.x) / window.innerWidth) * 5;
  cube.position.y = -((window.innerHeight * value.y) / window.innerHeight) * 5;
  renderer.render(scene, camera);
}

window.addEventListener('resize', onResize);
function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
onResize();