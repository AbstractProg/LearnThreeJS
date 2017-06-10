function KbrdMouseEventHandlers() {

   this.KeyDownEventHandler = function (event) {

      switch (event.keyCode) {
         case 37: //left arrow
         case 65: //'A'
            cameraManager.MoveCameraLeft();
            break;
         case 39: //right arrow
         case 68: //'D'
            cameraManager.MoveCameraRight();
            break;
         case 81: //'Q'
            console.log(cameraManager.GetCamera().rotation);
            cameraManager.RotateCameraLeft();
            break;
         case 69: //'E'
            console.log(cameraManager.GetCamera().rotation);
            cameraManager.RotateCameraRight();
            break;
         case 85: //'U'
            playerMesh.MovePlayer();
            break;
         case 38: //up arrow
            cameraManager.MoveCameraUp();
            break;
         case 40: //down arrow
            cameraManager.MoveCameraDown();
            break;
      }
   }

   this.MouseMoveEventHandler = function (event) {
   }
}