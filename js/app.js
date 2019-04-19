//To Find the walls:
//Move Pac to location
//Press space to stop him
//Press enter to get his coordinates

//JS TODO:
//functionality to detect him hitting walls and stopping

$(function(){

  var intervalTimer;
  var pacManMoving = false;

  //Pac Mans initial values for his position
  var pacManLeft = $('#pacman').position().left;
  var pacManTop = $('#pacman').position().top;
  var pacManRight = pacManLeft + $('#pacman').width();
  var pacManBottom = pacManTop + $('#pacman').height();

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
      case "Enter":
        console.log("Left: " + pacManLeft);
        console.log("Right: " + pacManRight);
        console.log("Top: " + pacManTop);
        console.log("Bottom: " + pacManBottom);
        break;
      case " ":
        stopPac();
        break;
      default:
        console.log(event.key);
    }
  });

  //function for calling movePac on a timer until another direction key is pressed
  function changeDir(axis, direction){
    //if Pac isnt already moving
    if(!pacManMoving){
      intervalTimer = setInterval(function(){
        //move him every 1/nth of a second
        movePac(axis, direction);
      }, 200);
      pacManMoving=true;
    }else{
      //if he is moving then stop the timer, and call recursively to get him moving in the new direction
      clearInterval(intervalTimer);
      pacManMoving = false;
      changeDir(axis, direction);
    }
  }

  //Function for moving pacman in each of the four directions
  //He also rotates to face his direction
  function movePac(axis, direction){
    if(direction == "positive" && axis == "horizontal"){
      pacManLeft+=10;
      $('#pacman').css('left', pacManLeft + 'px');
      $('#pacman').css('transform', 'rotate(0deg)');
    }else if (direction == "negative" && axis == "horizontal") {
      pacManLeft-=10;
      $('#pacman').css('left', pacManLeft + 'px');
      $('#pacman').css('transform', 'rotate(180deg)');
    }else if (direction == "positive" && axis == "vertical") {
      pacManTop+=10;
      $('#pacman').css('top', pacManTop + 'px');
      $('#pacman').css('transform', 'rotate(90deg)');
    }else if (direction == "negative" && axis == "vertical") {
      pacManTop-=10;
      $('#pacman').css('top', pacManTop + 'px');
      $('#pacman').css('transform', 'rotate(270deg)');
    }
  }

  //function for stopping pac moving
  function stopPac(){
    clearInterval(intervalTimer);
    pacManMoving = false;
  }
});
