//To Find the walls:
//Move Pac to location
//Press space to stop him
//Press enter to get his coordinates

//JS TODO:
//functionality to detect him hitting walls and stopping
//Think I need to check against right hand walls if he moves right,
//left hand walls if he moves Left
//top walls if he moves up
//bottom walls if he moves down

//Array of wall values could have the following structure:
//4 Multidimensional Arrays - one for each wall side
//Each row represents one specific wall
//3 columns, first is the horizontal value
//2 others, start height, end height (reversed for top and bottom walls)
//check hes not moving over the first value,
//and that hes not within the other two values

$(function(){

  //array of the right hand walls on the top row.
  //Hard coded way to allow him to recognise walls
  //[15, 85, 275]
  var firstRightWall = [[15, 80, 275], [15, 170, 560], [50, 80, 50],
   [50, 80, 155], [50, 80, 335], [50, 80, 460],
    [120, 130, 50], [120, 240, 155], [120, 130, 215],
  [135, 185, 275]];

  //var for setting the distance PacMan moves every interval
  var jumpDist = 5;
  var pacManHeight = $('#pacman').height();
  var pacManWidth = $('#pacman').width()
  var intervalTimer;
  var pacManMoving = false;

  //Pac Mans initial values for his position
  var pacManLeft = $('#pacman').position().left;
  var pacManTop = $('#pacman').position().top;
  var pacManRight = pacManLeft + pacManWidth;
  var pacManBottom = pacManTop + pacManHeight;

  //Event Listener that stop default action of spacebar being pressed
  $(document).keydown(function(event) {
    if(event.key == " "){
      event.preventDefault();
    }
  })

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
        event.preventDefault();
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
      }, 100);
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
      //if move is legal
      if(checkRightClear()){
        pacManLeft+=jumpDist;
        pacManRight+=jumpDist;
        $('#pacman').css('left', pacManLeft + 'px');
        $('#pacman').css('transform', 'rotate(0deg)');
      }
    }else if (direction == "negative" && axis == "horizontal") {
      pacManLeft-=jumpDist;
      pacManRight-=jumpDist;
      $('#pacman').css('left', pacManLeft + 'px');
      $('#pacman').css('transform', 'rotate(180deg)');
    }else if (direction == "positive" && axis == "vertical") {
      pacManTop+=jumpDist;
      pacManBottom+=jumpDist;
      $('#pacman').css('top', pacManTop + 'px');
      $('#pacman').css('transform', 'rotate(90deg)');
    }else if (direction == "negative" && axis == "vertical") {
      pacManTop-=jumpDist;
      pacManBottom-=jumpDist;
      $('#pacman').css('top', pacManTop + 'px');
      $('#pacman').css('transform', 'rotate(270deg)');
    }
  }

  //function for stopping pac moving
  function stopPac(){
    clearInterval(intervalTimer);
    pacManMoving = false;
  }

  function checkRightClear(){
    var xFlag, yFlag;

    for(var i=0; i < firstRightWall.length; i++){
      xFlag = true;
      yFlag = true;

      if(pacManTop >= (firstRightWall[i][0] - pacManHeight) && pacManTop <= firstRightWall[i][1]){
        yFlag = false;
      }

      //if you are trying to move past the X coordinate of the wall, set the x flag to false
      if((pacManRight+jumpDist) > firstRightWall[i][2] && (pacManRight+jumpDist) <= firstRightWall[i][2] + jumpDist){
        xFlag = false;
      }

      //if both flags have been set then return that the move isnt clear
      //if the square was clear, set both flags back to true;
      if(xFlag == false && yFlag == false){
        return false;
      }
    }

    return true;

  }

});
