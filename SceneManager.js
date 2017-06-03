function SceneManager(cameraManager)
{
   var m_cameraManager = cameraManager;
   var m_scene = new THREE.Scene();

   m_scene.add(m_cameraManager.GetCamera());

   // create a point light
   const pointLight =
      new THREE.PointLight(0xFFFFFF);

   // set its position
   pointLight.position.x = 10;
   pointLight.position.y = 50;
   pointLight.position.z = 130;

   // add to the scene
   m_scene.add(pointLight);

   // create the sphere's material
   const sphereMaterial =
      new THREE.MeshLambertMaterial(
         {
            color: 0xd277b1
         });

   /*// Set up the sphere vars
   const RADIUS = 50;
   const SEGMENTS = 16;
   const RINGS = 16;
   
   // Create a new mesh with
   // sphere geometry - we will cover
   // the sphereMaterial next!
   const sphere = new THREE.Mesh(
   
      new THREE.SphereGeometry(
         RADIUS,
         SEGMENTS,
         RINGS),
   
      sphereMaterial);
   
   
   
   // Move the Sphere back in Z so we
   // can see it.
   sphere.position.z = -300;
   
   // Finally, add the sphere to the scene.
   scene.add(sphere);*/

   const box = new THREE.Mesh(
      new THREE.BoxGeometry(500, 10, 600), sphereMaterial);
   box.position.y = -50;
   box.position.z = -300;
   m_scene.add(box);

   this.GetWidth = function()
   {
      return cameraManager.GetWidth();
   }

   this.GetHeight = function () {
      return cameraManager.GetHeight();
   }

   this.GetScene = function () {
      return m_scene;
   }

   this.GetCamera = function () {
      return m_cameraManager.GetCamera();
   }
}