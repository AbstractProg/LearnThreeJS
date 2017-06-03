function CameraManager() {
   // Set the scene size.
   var WIDTH = window.innerWidth;
   var HEIGHT = window.innerHeight;
   var m_camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);

   // Set some camera attributes.
   this.VIEW_ANGLE = 45;
   this.ASPECT = WIDTH / HEIGHT;
   this.NEAR = 0.1;
   this.FAR = 10000;

   this.GetWidth = function () {
      return WIDTH;
   };

   this.GetHeight = function () {
      return HEIGHT;
   };

   this.GetCamera = function () {
      return m_camera;
   }
}