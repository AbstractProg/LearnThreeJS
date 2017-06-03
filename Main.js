var cameraManager = new CameraManager();
var sceneManager = new SceneManager(cameraManager);
var rendererManager = new RendererManager(sceneManager);

requestAnimationFrame(rendererManager.Update);

document.addEventListener('keydown', function (event) {
   if (event.keyCode == 37) {
      camera.position.set(camera.position.x - 3, camera.position.y, camera.position.z);
      //camera.x = camera.x - 0.5;
   }
   else if (event.keyCode == 39) {
      camera.position.set(camera.position.x + 3, camera.position.y, camera.position.z);
      //camera.x = camera.x + 0.5;
   }
});