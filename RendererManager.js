function RendererManager(sceneManager) {

   this.Update = function () {
      // Draw!
      m_renderer.render(m_sceneManager.GetScene(), m_sceneManager.GetCamera());
      console.log(m_sceneManager.GetCamera().position.x);

      // Schedule the next frame.
      requestAnimationFrame(animationFunc);
   }

   var m_renderer = new THREE.WebGLRenderer();
   var m_sceneManager = sceneManager;
   //console.log(m_sceneManager);
   var animationFunc = this.Update;

   // Get the DOM element to attach to
   var container = document.querySelector('#container');

   // Attach the renderer-supplied DOM element.
   container.appendChild(m_renderer.domElement);

   //animationFunc = this.Update;
   console.log(animationFunc);

   m_renderer.setSize(m_sceneManager.GetWidth(), m_sceneManager.GetHeight());

   this.StartMainLoop = function () {
      // Schedule the first frame.
      requestAnimationFrame(animationFunc);
   }
}