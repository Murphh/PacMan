var pacManLeft = 15;
var pacManTop = 15;

$(function(){

  //Event Listener for keyboard presses
  $(document).keyup(function(event) {

        switch (event.key) {
          case "ArrowUp":
            movePac("vertical", "negative");
            break;
          case "ArrowDown":
            movePac("vertical", "positive");
            break;
          case "ArrowRight":
            movePac("horizontal", "positive");
            break;
          case "ArrowLeft":
            movePac("horizontal", "negative");
            break;
          default:
            console.log(event.key);
        }
    });
});

function movePac(axis, direction){
  if(direction == "positive" && axis == "horizontal"){
    pacManLeft+=30;
    $('#pacman').css('left', pacManLeft + 'px');
  }else if (direction == "negative" && axis == "horizontal") {
    pacManLeft-=30;
    $('#pacman').css('left', pacManLeft + 'px');
  }else if (direction == "positive" && axis == "vertical") {
    pacManTop+=30;
    $('#pacman').css('top', pacManTop + 'px');
  }else if (direction == "negative" && axis == "vertical") {
    pacManTop-=30;
    $('#pacman').css('top', pacManTop + 'px');
  }
}
