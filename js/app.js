//Pac Mans initial left and top values for his position
var pacManLeft = 15;
var pacManTop = 15;

var intervalTimer;
var pacManMoving = false;

//document on page load container
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
            changeDir();
        }
    });

});

function changeDir(){
  if(!pacManMoving){
    intervalTimer = setInterval(function(){
      console.log("50ms");
    }, 200);
    pacManMoving=true;
  }else{
    clearInterval(intervalTimer);
    console.log("Stopped timer");
  }
}

//Function for moving pacman in each of the four directions
function movePac(axis, direction){
  if(direction == "positive" && axis == "horizontal"){
    pacManLeft+=10;
    $('#pacman').css('left', pacManLeft + 'px');
  }else if (direction == "negative" && axis == "horizontal") {
    pacManLeft-=10;
    $('#pacman').css('left', pacManLeft + 'px');
  }else if (direction == "positive" && axis == "vertical") {
    pacManTop+=10;
    $('#pacman').css('top', pacManTop + 'px');
  }else if (direction == "negative" && axis == "vertical") {
    pacManTop-=10;
    $('#pacman').css('top', pacManTop + 'px');
  }
}
