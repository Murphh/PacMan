console.log("Loaded Page");

$(function(){

  //Event Listener for keyboard presses
  $(document).keyup(function(event) {

        switch (event.key) {
          case "ArrowUp":
            console.log("Up Key Pressed");
            break;
          case "ArrowDown":
            console.log("Down Key Pressed");
            break;
          case "ArrowRight":
            console.log("Right Key Pressed");
            break;
          case "ArrowLeft":
            console.log("Left Key Pressed");
            break;
          default:
            console.log(event.key);
        }
    });

});
