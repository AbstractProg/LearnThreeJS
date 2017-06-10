//global variables
var WIDTH = window.innerWidth - 20;
var HEIGHT = window.innerHeight - 20;
var cameraManager = new CameraManager();
var sceneManager = new SceneManager();
var rendererManager = new RendererManager();
var kbrdMouseEventHandlers = new KbrdMouseEventHandlers();
var playerMesh = new PlayerMesh();

/*var loader = new THREE.JSONLoader();
var particleMaterial = new THREE.MeshBasicMaterial;

loader.load("monkey.json",
   function (geometry) {
      mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
      mesh.scale.set(10, 10, 10);
      mesh.position.y = 150;
      mesh.position.x = 0;
      scene.add(mesh);
   }
);*/

sceneManager.AddObject(cameraManager.GetCamera());
playerMesh.AddToScene();

rendererManager.AddFPSDisplay();

document.addEventListener('keydown', kbrdMouseEventHandlers.KeyDownEventHandler);
document.addEventListener('mousemove', kbrdMouseEventHandlers.MouseMoveEventHandler);

requestAnimationFrame(rendererManager.Update);