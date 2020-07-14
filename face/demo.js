"use strict";

let THREECAMERA = null;
let ISMOUTHOPENED;
// SETTINGS of this demo:
const SETTINGS = {
  rotationOffsetX: 0, // negative -> look upper. in radians
  cameraFOV: 40,    // in degrees, 3D camera FOV
  pivotOffsetYZ: [-0.2,-0.2], // position the rotation pivot along Y and Z axis
  detectionThreshold: 0.5, // sensibility, between 0 and 1. Less -> more sensitive
  detectionHysteresis: 0.1,
  mouthOpeningThreshold: 0.5, // sensibility of mouth opening, between 0 and 1
  mouthOpeningHysteresis: 0.05,
  scale: [1,1], // scale of the DIV along horizontal and vertical axis
  positionOffset: [0,0,-0.2] // set a 3D position fofset to the div
};

const scene = new THREE.Scene();
const scene_b = new THREE.Scene();
const texture = new THREE.TextureLoader().load('./images.png',
(tex) => { // 読み込み完了時
    const w = 1.8;
    const h = tex.image.height/(tex.image.width/w);

    const geometry = new THREE.PlaneGeometry(1, 1);
    let material;
    material = new THREE.MeshPhongMaterial( { transparent: true,map:texture } );
    const plane = new THREE.Mesh( geometry, material );
    plane.scale.set(w, h, 1);
    plane.position.y += .2;
    scene.add( plane );
    const light = new THREE.AmbientLight( 0xffffff );
    scene.add( light );
});
const texture_b = new THREE.TextureLoader().load('./images_b.png',
(tex) => { // 読み込み完了時
    const w = 1.2;
    const h = tex.image.height/(tex.image.width/w);

    const geometry = new THREE.PlaneGeometry(1, 1);
    let material;
    material = new THREE.MeshPhongMaterial( { transparent: true,map:texture_b } );
    const plane = new THREE.Mesh( geometry, material );
    plane.scale.set(w, h, 1);
    plane.position.y += .1;
    scene_b.add( plane );
    const light = new THREE.AmbientLight( 0xffffff );
    scene_b.add( light );
});



// callback: launched if a face is detected or lost.
function detect_callback(faceIndex, isDetected) {
  if (isDetected) {
    console.log('INFO in detect_callback(): DETECTED');
  } else {
    console.log('INFO in detect_callback(): LOST');
  }
}

// build the 3D. called once when Jeeliz Face Filter is OK
function init_threeScene(spec, ISMOUTHOPENED) {
  const threeStuffs = THREE.JeelizHelper.init(spec, detect_callback);
  window.THREESTUFF = threeStuffs;

   // CREATE A CUBE
  // const cubeGeometry = new THREE.BoxGeometry(1,1,1);
  // const cubeMaterial = new THREE.MeshNormalMaterial();
  // const threeCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // threeCube.frustumCulled = false;
  threeStuffs.faceObject.add(scene);
  threeStuffs.faceObject.add(scene_b);

  //CREATE THE CAMERA
  THREECAMERA = THREE.JeelizHelper.create_camera();
} // end init_threeScene()

// launched by body.onload():
function main(){
  JeelizResizer.size_canvas({
    canvasId: 'jeeFaceFilterCanvas',
    callback: function(isError, bestVideoSettings){
      init_faceFilter(bestVideoSettings);
    }
  })
}

function init_faceFilter(videoSettings){
  JEEFACEFILTERAPI.init({
    followZRot: true,
    canvasId: 'jeeFaceFilterCanvas',
    NNCpath: './', // root of NNC.json file
    maxFacesDetected: 1,
    callbackReady: function(errCode, spec){
      if (errCode){
        console.log('AN ERROR HAPPENS. ERR =', errCode);
        return;
      }

      console.log('INFO: JEEFACEFILTERAPI IS READY');
      init_threeScene(spec);
    },

    // called at each render iteration (drawing loop):
    callbackTrack: function(detectState){
      // // detects mouth opening:
      const mouthOpening = detectState.expressions[0];
      scene.visible = true;
      scene_b.visible = false;
      if (ISMOUTHOPENED && mouthOpening<SETTINGS.mouthOpeningThreshold-SETTINGS.mouthOpeningHysteresis){
        // THREESTUFF.faceObject.children[1].visible = false;
        // THREESTUFF.faceObject.children[1].visible = true;
      } else if (!ISMOUTHOPENED && mouthOpening>SETTINGS.mouthOpeningThreshold+SETTINGS.mouthOpeningHysteresis){
        scene.visible = false;
        scene_b.visible = true;
      }
      THREE.JeelizHelper.render(detectState, THREECAMERA);
    }
  }); //end JEEFACEFILTERAPI.init call
}

