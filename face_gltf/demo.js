"use strict";

let THREECAMERA = null;
let ISMOUTHOPENED;
// SETTINGS of this demo:
const SETTINGS = {
  gltfModelURL: './scene.glb',
  // cubeMapURL: 'Bridge2/',
  offsetXYZ: [0,.2,0],
  scale: 1.4,
  mouthOpeningThreshold: 0.5,
  mouthOpeningHysteresis: 0.05,
};



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
  const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#jeeFaceFilterCanvas')
  });
  window.THREESTUFF = threeStuffs;

  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load( SETTINGS.gltfModelURL, function ( gltf ) {
    gltf.scene.frustumCulled = false;
      
    // center and scale the object:
    const bbox = new THREE.Box3().expandByObject(gltf.scene);

    // center the model:
    const centerBBox = bbox.getCenter(new THREE.Vector3());
    // gltf.scene.position.add(centerBBox.multiplyScalar(-1));
    gltf.scene.position.add(new THREE.Vector3(SETTINGS.offsetXYZ[0],SETTINGS.offsetXYZ[1], SETTINGS.offsetXYZ[2]));
    gltf.scene.rotation.x += 1.25;

    // scale the model according to its width:
    const sizeX = bbox.getSize(new THREE.Vector3()).x;
    gltf.scene.scale.multiplyScalar(SETTINGS.scale / sizeX);
    const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
    light.intensity = 2;
    renderer.gammaOutput = true;
    renderer.gammaFactor = 8;
    // シーンに追加
    gltf.scene.add(light);
    // dispatch the model:
    threeStuffs.faceObject.add(gltf.scene);
  } ); //end gltfLoader.load callback
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
      // const mouthOpening = detectState.expressions[0];
      // scene.visible = true;
      // scene_b.visible = false;
      // if (ISMOUTHOPENED && mouthOpening<SETTINGS.mouthOpeningThreshold-SETTINGS.mouthOpeningHysteresis){
      //   // THREESTUFF.faceObject.children[1].visible = false;
      //   // THREESTUFF.faceObject.children[1].visible = true;
      // } else if (!ISMOUTHOPENED && mouthOpening>SETTINGS.mouthOpeningThreshold+SETTINGS.mouthOpeningHysteresis){
      //   scene.visible = false;
      //   scene_b.visible = true;
      // }
      THREE.JeelizHelper.render(detectState, THREECAMERA);
    }
  }); //end JEEFACEFILTERAPI.init call
}

