function SceneManager()
{
   var m_scene = new THREE.Scene();

   this.AddObject = function (object)
   {
      m_scene.add(object);
   }

   // create a point light
   const pointLight =
      new THREE.PointLight(0xFFFFFF);

   // set its position
   pointLight.position.x = 10;
   pointLight.position.y = 100;
   pointLight.position.z = -15;

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

   const floor = new THREE.Mesh(
      new THREE.BoxGeometry(500, 10, 600), sphereMaterial);
   floor.position.y = -10;
   floor.position.z = -300;
   m_scene.add(floor);

   this.GetScene = function () {
      return m_scene;
   }
}