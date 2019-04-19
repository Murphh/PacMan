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
            changeDir("vertical", "negative");
            break;
          case "ArrowDown":
            changeDir("vertical", "positive");
            break;
          case "ArrowRight":
            changeDir("horizontal", "positive");
            break;
          case "ArrowLeft":
            changeDir("horizontal", "negative");
            break;
          default:
            console.log(event.key)
        }
    });

});

function changeDir(axis, direction){
  if(!pacManMoving){
    intervalTimer = setInterval(function(){
      movePac(axis, direction);
      console.log("50ms");
    }, 200);
    pacManMoving=true;
  }else{
    clearInterval(intervalTimer);
    pacManMoving = false;
    changeDir(axis, direction);
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
