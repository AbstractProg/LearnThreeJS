function RendererManager() {

   this.Update = function () {
      // Draw!
      m_renderer.render(sceneManager.GetScene(), cameraManager.GetCamera());
      // Schedule the next frame.
   requestAnimationFrame(animationFunc);
   fpsBox.update();
   }

   var fpsBox;
   var m_renderer = new THREE.WebGLRenderer();
   var m_sceneManager = sceneManager;
   var animationFunc = this.Update;

   // Get the DOM element to attach to
   var container = document.querySelector('#container');

   // Attach the renderer-supplied DOM element.
   container.appendChild(m_renderer.domElement);

   //animationFunc = this.Update;

   m_renderer.setSize(WIDTH, HEIGHT);

   this.AddFPSDisplay = function ()
   {
      fpsBox = new Stats();
      fpsBox.domElement.style.position = 'absolute';
      fpsBox.domElement.style.bottom = '0px';
      fpsBox.domElement.style.zIndex = 100;
      container.appendChild(fpsBox.domElement);
   }
}