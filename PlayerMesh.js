function PlayerMesh() {

   var playerMaterial =
      new THREE.MeshLambertMaterial({ color: 0x2277b1});

   var box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 30, 100), playerMaterial);
   box.position.y = -9;
   box.position.z = -300;

   this.AddToScene = function ()
   {
      sceneManager.GetScene().add(box);
   }

   this.MovePlayer = function()
   {
      box.position.y += 5;
   }
}