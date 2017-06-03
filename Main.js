﻿class World
{
   constructor() {
      // Set the scene size.
      this.WIDTH = window.innerWidth;
      this.HEIGHT = window.innerHeight;

      // Set some camera attributes.
      this.VIEW_ANGLE = 45;
      this.ASPECT = WIDTH / HEIGHT;
      this.NEAR = 0.1;
      this.FAR = 10000;
   }

   GetWidth()
   {
      return this.WIDTH;
   }

   GetHeight() {
      return this.HEIGHT;
   }
}

// Set the scene size.
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

var world = new World();

// Get the DOM element to attach to
const container =
   document.querySelector('#container');

// Create a WebGL renderer, camera
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera =
   //new THREE.PerspectiveCamera(world.VIEW_ANGLE, world.ASPECT, world.NEAR, world.FAR);
   new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

const scene = new THREE.Scene();

// Add the camera to the scene.
scene.add(camera);

// Start the renderer.
console.log("world.WIDTH = " + world.GetWidth());
renderer.setSize(world.GetWidth(), world.GetHeight());
//renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);

// create a point light
const pointLight =
   new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

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
scene.add(box);

function update() {
   // Draw!
   renderer.render(scene, camera);
   console.log(camera.position.x);

   // Schedule the next frame.
   requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);

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