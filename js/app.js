$(function(){

  var decisionSquares = [];
  decisionSquares[0] = {
    leftPosition: 15,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: false
  };
  decisionSquares[1] = {
    leftPosition: 125,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[2] = {
    leftPosition: 245,
    topPosition: 15,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[3] = {
    leftPosition: 305,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[4] = {
    leftPosition: 425,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[5] = {
    leftPosition: 525,
    topPosition: 15,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[6] = {
    leftPosition: 15,
    topPosition: 85,
    up: true,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[7] = {
    leftPosition: 125,
    topPosition: 85,
    up: true,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[8] = {
    leftPosition: 185,
    topPosition: 85,
    up: false,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[9] = {
    leftPosition: 245,
    topPosition: 85,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[10] = {
    leftPosition: 305,
    topPosition: 85,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[11] = {
    leftPosition: 365,
    topPosition: 85,
    up: false,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[12] = {
    leftPosition: 425,
    topPosition: 85,
    up: true,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[13] = {
    leftPosition: 525,
    topPosition: 85,
    up: true,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[14] = {
    leftPosition: 15,
    topPosition: 135,
    up: true,
    right: true,
    down: false,
    left: false
  }
  decisionSquares[15] = {
    leftPosition: 125,
    topPosition: 135,
    up: true,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[16] = {
    leftPosition: 185,
    topPosition: 135,
    up: true,
    right: true,
    down: false,
    left: false
  }
  decisionSquares[17] = {
    leftPosition: 245,
    topPosition: 135,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[18] = {
    leftPosition: 305,
    topPosition: 135,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[19] = {
    leftPosition: 365,
    topPosition: 135,
    up: true,
    right: false,
    down: false,
    left: true
  }
  decisionSquares[20] = {
    leftPosition: 425,
    topPosition: 135,
    up: true,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[21] = {
    leftPosition: 525,
    topPosition: 135,
    up: true,
    right: false,
    down: false,
    left: true
  }
  decisionSquares[22] = {
    leftPosition: 185,
    topPosition: 185,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[23] = {
    leftPosition: 245,
    topPosition: 185,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[24] = {
    leftPosition: 305,
    topPosition: 185,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[25] = {
    leftPosition: 365,
    topPosition: 185,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[26] = {
    leftPosition: 125,
    topPosition: 245,
    up: true,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[27] = {
    leftPosition: 185,
    topPosition: 245,
    up: true,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[28] = {
    leftPosition: 365,
    topPosition: 245,
    up: true,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[29] = {
    leftPosition: 425,
    topPosition: 245,
    up: true,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[30] = {
    leftPosition: 185,
    topPosition: 295,
    up: true,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[31] = {
    leftPosition: 365,
    topPosition: 295,
    up: true,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[32] = {
    leftPosition: 15,
    topPosition: 345,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[33] = {
    leftPosition: 125,
    topPosition: 345,
    up: true,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[34] = {
    leftPosition: 185,
    topPosition: 345,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[35] = {
    leftPosition: 245,
    topPosition: 345,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[36] = {
    leftPosition: 305,
    topPosition: 345,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[37] = {
    leftPosition: 365,
    topPosition: 345,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[38] = {
    leftPosition: 425,
    topPosition: 345,
    up: true,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[39] = {
    leftPosition: 525,
    topPosition: 345,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[40] = {
    leftPosition: 15,
    topPosition: 405,
    up: true,
    right: true,
    down: false,
    left: false
  }
  decisionSquares[41] = {
    leftPosition: 65,
    topPosition: 405,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[42] = {
    leftPosition: 125,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[43] = {
    leftPosition: 185,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[44] = {
    leftPosition: 245,
    topPosition: 405,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[45] = {
    leftPosition: 305,
    topPosition: 405,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[46] = {
    leftPosition: 365,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: true
  }
  decisionSquares[47] = {
    leftPosition: 425,
    topPosition: 405,
    up: true,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[48] = {
    leftPosition: 485,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[49] = {
    leftPosition: 525,
    topPosition: 405,
    up: true,
    right: false,
    down: false,
    left: true
  }
  decisionSquares[50] = {
    leftPosition: 15,
    topPosition: 455,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[51] = {
    leftPosition: 65,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[52] = {
    leftPosition: 125,
    topPosition: 455,
    up: true,
    right: false,
    down: false,
    left: true
  }
  decisionSquares[53] = {
    leftPosition: 185,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: false
  }
  decisionSquares[54] = {
    leftPosition: 245,
    topPosition: 455,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[55] = {
    leftPosition: 305,
    topPosition: 455,
    up: false,
    right: true,
    down: true,
    left: false
  }
  decisionSquares[56] = {
    leftPosition: 365,
    topPosition: 455,
    up: true,
    right: false,
    down: false,
    left: true
  }
  decisionSquares[57] = {
    leftPosition: 425,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: false
  }
  decisionSquares[58] = {
    leftPosition: 485,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[59] = {
    leftPosition: 525,
    topPosition: 455,
    up: false,
    right: false,
    down: true,
    left: true
  }
  decisionSquares[60] = {
    leftPosition: 15,
    topPosition: 505,
    up: true,
    right: true,
    down: false,
    left: false
  }
  decisionSquares[61] = {
    leftPosition: 245,
    topPosition: 505,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[62] = {
    leftPosition: 305,
    topPosition: 505,
    up: true,
    right: true,
    down: false,
    left: true
  }
  decisionSquares[63] = {
    leftPosition: 525,
    topPosition: 505,
    up: true,
    right: false,
    down: false,
    left: true
  }

  //var for setting the distance PacMan moves every interval
  var previousDir;
  var jumpDist = 10;
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
    if(event.key == " " || event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowLeft"){
      event.preventDefault();
    }
  })

  //Event Listener for keyboard presses
  $(document).keyup(function(event) {

    switch (event.key) {
      case "ArrowUp":
        changeDir("up");
        break;
      case "ArrowDown":
        changeDir("down");
        break;
      case "ArrowRight":
        changeDir("right");
        break;
      case "ArrowLeft":
        changeDir("left");
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
  function changeDir(direction){
    //if Pac isnt already moving
    if(!pacManMoving){
      intervalTimer = setInterval(function(){
        //move him every 1/nth of a second
        movePac(direction);
      }, 400);
      pacManMoving=true;
    }else{
      //if he is moving then stop the timer, and call recursively to get him moving in the new direction
      clearInterval(intervalTimer);
      pacManMoving = false;
      changeDir(direction);
    }
  }

  //Function for moving pacman in each of the four directions
  //He also rotates to face his direction
  function movePac(direction){

    if(pacManLeft == 565 && pacManTop == 245 && previousDir == "right"){
      pacManLeft = 0;
      pacManRight = pacManLeft += pacManWidth;
      $('#pacman').css('left', pacManLeft + 'px');
      $('#pacman').css('transform', 'rotate(0deg)');
      previousDir = "right";
    }else if (pacManLeft <= -20 && pacManTop == 245 && previousDir == "left") {
      console.log("Moved here");
      pacManLeft = 565;
      pacManRight = pacManLeft += pacManWidth;
      $('#pacman').css('left', pacManLeft + 'px');
      $('#pacman').css('transform', 'rotate(0deg)');
      previousDir = "left";
    }else{
      var squareOptions = checkOptions();
      if(direction == "right" && squareOptions.right == true){
        pacManLeft+=jumpDist;
        pacManRight+=jumpDist;
        $('#pacman').css('left', pacManLeft + 'px');
        $('#pacman').css('transform', 'rotate(0deg)');
        previousDir = "right";
      }else if (direction == "left" && squareOptions.left == true){
        pacManLeft-=jumpDist;
        pacManRight-=jumpDist;
        $('#pacman').css('left', pacManLeft + 'px');
        $('#pacman').css('transform', 'rotate(180deg)');
        previousDir = "left";
      }else if (direction == "down" && squareOptions.down == true){
        pacManTop+=jumpDist;
        pacManBottom+=jumpDist;
        $('#pacman').css('top', pacManTop + 'px');
        $('#pacman').css('transform', 'rotate(90deg)');
        previousDir = "down";
      }else if (direction == "up" && squareOptions.up == true){
        pacManTop-=jumpDist;
        pacManBottom-=jumpDist;
        $('#pacman').css('top', pacManTop + 'px');
        $('#pacman').css('transform', 'rotate(270deg)');
        previousDir = "up"
      }
    }

  }

  //function for stopping pac moving
  function stopPac(){
    clearInterval(intervalTimer);
    pacManMoving = false;
  }

  function checkOptions(){
    var previousOpt = {};

    for (var i = 0; i < decisionSquares.length; i++) {
      if (decisionSquares[i].leftPosition == pacManLeft && decisionSquares[i].topPosition == pacManTop) {
        return decisionSquares[i];
      }
    }

    if(previousDir == "right" || previousDir == "left"){
      previousOpt.up = false;
      previousOpt.down = false;
      previousOpt.left = true;
      previousOpt.right = true;
    }else if (previousDir == "up" || previousDir == "down") {
      previousOpt.up = true;
      previousOpt.down = true;
      previousOpt.left = false;
      previousOpt.right = false;
    }

    return previousOpt;
  }

});
