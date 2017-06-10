function CameraManager() {
   // Set the scene size.
   var m_camera = new THREE.PerspectiveCamera(this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR);

   // Set some camera attributes.
   this.VIEW_ANGLE = 45;
   this.ASPECT = WIDTH / HEIGHT;
   this.NEAR = 0.1;
   this.FAR = 10000;

   m_camera.position.set(0, 500, 250);
   m_camera.up = new THREE.Vector3(0, 1, 0);
   m_camera.lookAt = new THREE.Vector3(0, 0, 1);
   m_camera.rotateX(-45 * DEGREES_TO_RADIANS);

   this.MoveCameraAbs = function (destinationVector)
   {
      m_camera.position.set(destinationVector.X, destinationVector.Y, destinationVector.Z);
   }

   this.MoveCameraRight = function () {
      m_camera.position.set(m_camera.position.x + 3, m_camera.position.y, m_camera.position.z);
   }

   this.MoveCameraLeft = function () {
      m_camera.position.set(m_camera.position.x - 3, m_camera.position.y, m_camera.position.z);
   }

   this.MoveCameraForward = function () {
      m_camera.position.set(m_camera.position.x, m_camera.position.y, m_camera.position.z);
   }

   this.MoveCameraBackward = function () {
      m_camera.position.set(m_camera.position.x, m_camera.position.y, m_camera.position.z);
   }

   this.MoveCameraUp = function () {
      m_camera.position.y += 3;
   }

   this.MoveCameraDown = function () {
      m_camera.position.y -= 3;
   }

   this.RotateCameraLeft = function () {
      m_camera.rotateY(5 * DEGREES_TO_RADIANS);
   }

   this.RotateCameraRight = function () {
      m_camera.rotateY(-5 * DEGREES_TO_RADIANS);
   }
   
   this.GetCamera = function () {
      return m_camera;
   }

   this.LookUp = function()
   {
      m_camera.lookAt = new THREE.Vector3(0, m_camera.lookAt.Y + 0.3, m_camera.lookAt.Z);
   }
}