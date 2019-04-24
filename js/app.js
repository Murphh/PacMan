$(function(){
  /**********************************************************/
  /*---------Hard Coded Data for decison squares -----------*/
  /**********************************************************/
  var decisionSquares = [];
  decisionSquares[0] = {
    leftPosition: 15,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [1, 6]
  };
  decisionSquares[1] = {
    leftPosition: 125,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: true,
    connectedSquares: [0, 2, 7]
  }
  decisionSquares[2] = {
    leftPosition: 245,
    topPosition: 15,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [1, 9]
  }
  decisionSquares[3] = {
    leftPosition: 305,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [4, 10]
  }
  decisionSquares[4] = {
    leftPosition: 425,
    topPosition: 15,
    up: false,
    right: true,
    down: true,
    left: true,
    connectedSquares: [3, 5, 12]
  }
  decisionSquares[5] = {
    leftPosition: 525,
    topPosition: 15,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [4, 13]
  }
  decisionSquares[6] = {
    leftPosition: 15,
    topPosition: 85,
    up: true,
    right: true,
    down: true,
    left: false,
    connectedSquares: [0, 7, 14]
  }
  decisionSquares[7] = {
    leftPosition: 125,
    topPosition: 85,
    up: true,
    right: true,
    down: true,
    left: true,
    connectedSquares: [1, 6, 8, 15]
  }
  decisionSquares[8] = {
    leftPosition: 185,
    topPosition: 85,
    up: false,
    right: true,
    down: true,
    left: true,
    connectedSquares: [7, 9, 16]
  }
  decisionSquares[9] = {
    leftPosition: 245,
    topPosition: 85,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [2, 8, 10]
  }
  decisionSquares[10] = {
    leftPosition: 305,
    topPosition: 85,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [3, 9, 11]
  }
  decisionSquares[11] = {
    leftPosition: 365,
    topPosition: 85,
    up: false,
    right: true,
    down: true,
    left: true,
    connectedSquares: [10, 12, 19]
  }
  decisionSquares[12] = {
    leftPosition: 425,
    topPosition: 85,
    up: true,
    right: true,
    down: true,
    left: true,
    connectedSquares: [4, 11, 13]
  }
  decisionSquares[13] = {
    leftPosition: 525,
    topPosition: 85,
    up: true,
    right: false,
    down: true,
    left: true,
    connectedSquares: [5, 12]
  }
  decisionSquares[14] = {
    leftPosition: 15,
    topPosition: 135,
    up: true,
    right: true,
    down: false,
    left: false,
    connectedSquares: [6, 15]
  }
  decisionSquares[15] = {
    leftPosition: 125,
    topPosition: 135,
    up: true,
    right: false,
    down: true,
    left: true,
    connectedSquares: [7, 14, 26]
  }
  decisionSquares[16] = {
    leftPosition: 185,
    topPosition: 135,
    up: true,
    right: true,
    down: false,
    left: false,
    connectedSquares: [8, 17]
  }
  decisionSquares[17] = {
    leftPosition: 245,
    topPosition: 135,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [16, 23]
  }
  decisionSquares[18] = {
    leftPosition: 305,
    topPosition: 135,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [19, 24]
  }
  decisionSquares[19] = {
    leftPosition: 365,
    topPosition: 135,
    up: true,
    right: false,
    down: false,
    left: true,
    connectedSquares: [11, 18]
  }
  decisionSquares[20] = {
    leftPosition: 425,
    topPosition: 135,
    up: true,
    right: true,
    down: true,
    left: false,
    connectedSquares: [12, 21, 29]
  }
  decisionSquares[21] = {
    leftPosition: 525,
    topPosition: 135,
    up: true,
    right: false,
    down: false,
    left: true,
    connectedSquares: [13, 20]
  }
  decisionSquares[22] = {
    leftPosition: 185,
    topPosition: 185,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [23, 27]
  }
  decisionSquares[23] = {
    leftPosition: 245,
    topPosition: 185,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [17, 22, 24]
  }
  decisionSquares[24] = {
    leftPosition: 305,
    topPosition: 185,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [18, 23, 25]
  }
  decisionSquares[25] = {
    leftPosition: 365,
    topPosition: 185,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [24, 28]
  }
  decisionSquares[26] = {
    leftPosition: 125,
    topPosition: 245,
    up: true,
    right: true,
    down: true,
    left: true,
    connectedSquares: [15, 27, 33]
  }
  decisionSquares[27] = {
    leftPosition: 185,
    topPosition: 245,
    up: true,
    right: false,
    down: true,
    left: true,
    connectedSquares: [22, 26, 30]
  }
  decisionSquares[28] = {
    leftPosition: 365,
    topPosition: 245,
    up: true,
    right: true,
    down: true,
    left: false,
    connectedSquares: [25, 29, 31]
  }
  decisionSquares[29] = {
    leftPosition: 425,
    topPosition: 245,
    up: true,
    right: true,
    down: true,
    left: true,
    connectedSquares: [20, 28, 38]
  }
  decisionSquares[30] = {
    leftPosition: 185,
    topPosition: 295,
    up: true,
    right: true,
    down: true,
    left: false,
    connectedSquares: [27, 31, 34]
  }
  decisionSquares[31] = {
    leftPosition: 365,
    topPosition: 295,
    up: true,
    right: false,
    down: true,
    left: true,
    connectedSquares: [28, 30, 37]
  }
  decisionSquares[32] = {
    leftPosition: 15,
    topPosition: 345,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [33, 40]
  }
  decisionSquares[33] = {
    leftPosition: 125,
    topPosition: 345,
    up: true,
    right: true,
    down: true,
    left: true,
    connectedSquares: [26, 32, 34, 42]
  }
  decisionSquares[34] = {
    leftPosition: 185,
    topPosition: 345,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [30, 33, 35]
  }
  decisionSquares[35] = {
    leftPosition: 245,
    topPosition: 345,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [34, 44]
  }
  decisionSquares[36] = {
    leftPosition: 305,
    topPosition: 345,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [37, 45]
  }
  decisionSquares[37] = {
    leftPosition: 365,
    topPosition: 345,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [31, 36, 38]
  }
  decisionSquares[38] = {
    leftPosition: 425,
    topPosition: 345,
    up: true,
    right: true,
    down: true,
    left: true,
    connectedSquares: [29, 37, 39, 47]
  }
  decisionSquares[39] = {
    leftPosition: 525,
    topPosition: 345,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [38, 49]
  }
  decisionSquares[40] = {
    leftPosition: 15,
    topPosition: 405,
    up: true,
    right: true,
    down: false,
    left: false,
    connectedSquares: [32, 41]
  }
  decisionSquares[41] = {
    leftPosition: 65,
    topPosition: 405,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [40, 51]
  }
  decisionSquares[42] = {
    leftPosition: 125,
    topPosition: 405,
    up: true,
    right: true,
    down: true,
    left: false,
    connectedSquares: [33, 43, 52]
  }
  decisionSquares[43] = {
    leftPosition: 185,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: true,
    connectedSquares: [42, 44, 53]
  }
  decisionSquares[44] = {
    leftPosition: 245,
    topPosition: 405,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [35, 43, 45]
  }
  decisionSquares[45] = {
    leftPosition: 305,
    topPosition: 405,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [36, 44, 46]
  }
  decisionSquares[46] = {
    leftPosition: 365,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: true,
    connectedSquares: [45, 47, 56]
  }
  decisionSquares[47] = {
    leftPosition: 425,
    topPosition: 405,
    up: true,
    right: false,
    down: true,
    left: true,
    connectedSquares: [38, 46, 57]
  }
  decisionSquares[48] = {
    leftPosition: 485,
    topPosition: 405,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [49, 58]
  }
  decisionSquares[49] = {
    leftPosition: 525,
    topPosition: 405,
    up: true,
    right: false,
    down: false,
    left: true,
    connectedSquares: [39, 48]
  }
  decisionSquares[50] = {
    leftPosition: 15,
    topPosition: 455,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [51, 60]
  }
  decisionSquares[51] = {
    leftPosition: 65,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [41, 50]
  }
  decisionSquares[52] = {
    leftPosition: 125,
    topPosition: 455,
    up: true,
    right: false,
    down: false,
    left: true,
    connectedSquares: [42, 51]
  }
  decisionSquares[53] = {
    leftPosition: 185,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: false,
    connectedSquares: [43, 54]
  }
  decisionSquares[54] = {
    leftPosition: 245,
    topPosition: 455,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [53, 61]
  }
  decisionSquares[55] = {
    leftPosition: 305,
    topPosition: 455,
    up: false,
    right: true,
    down: true,
    left: false,
    connectedSquares: [56, 62]
  }
  decisionSquares[56] = {
    leftPosition: 365,
    topPosition: 455,
    up: true,
    right: false,
    down: false,
    left: true,
    connectedSquares: [46, 55]
  }
  decisionSquares[57] = {
    leftPosition: 425,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: false,
    connectedSquares: [47, 58]
  }
  decisionSquares[58] = {
    leftPosition: 485,
    topPosition: 455,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [48, 57, 59]
  }
  decisionSquares[59] = {
    leftPosition: 525,
    topPosition: 455,
    up: false,
    right: false,
    down: true,
    left: true,
    connectedSquares: [58, 63]
  }
  decisionSquares[60] = {
    leftPosition: 15,
    topPosition: 505,
    up: true,
    right: true,
    down: false,
    left: false,
    connectedSquares: [50, 61]
  }
  decisionSquares[61] = {
    leftPosition: 245,
    topPosition: 505,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [54, 60, 62]
  }
  decisionSquares[62] = {
    leftPosition: 305,
    topPosition: 505,
    up: true,
    right: true,
    down: false,
    left: true,
    connectedSquares: [55, 61, 63]
  }
  decisionSquares[63] = {
    leftPosition: 525,
    topPosition: 505,
    up: true,
    right: false,
    down: false,
    left: true,
    connectedSquares: [59, 62]
  }

  /************************************************/
  /*----Initial Var Setup & Running of Game-------*/
  /************************************************/

  var leaderboardScores = [];
  var ghostsMoving = false;
  var ghosts = [];
  var pacMan = {};
  var score = 0;
  //var previousDir;
  var jumpDist = 10;
  var intervalTimer;
  //var pacManMoving = false;

  //Pac Mans initial values for his position
  var pacManLeft, pacManTop, pacManRight, pacManBottom;
  var pacManHeight = $('#pacman').height();
  var pacManWidth = $('#pacman').width();

  //Starts the Game!
  setupGame();

  /*********************************************/
  /*----Funcs for starting/ending Game---------*/
  /*********************************************/

  function setupGame(){
    $(".current-score-display").empty();
    $(".current-score-display").append('<button type="button" id="startGame">Start Game!</button>');
    score = 0;
    addPacMan();
    addGhosts();

    addCoins();

    $("#startGame").click(function(){
      $(".current-score-display").append('<h1 id="score"></h1>');
      $("#startGame").remove();
      startCounter();
    });
  }

  function addPacMan(){
    $(".game-area").empty();
    $(".game-area").append('<img class="background-img" src="img/level1-background.jpg" alt=""> <img src="img/pacman.png" class="pacman-icon"  id="pacman" alt="">');
    pacMan.left = $('#pacman').position().left;
    pacMan.right = $('#pacman').position().left + $('#pacman').width();
    pacMan.top = $('#pacman').position().top;
    pacMan.bottom = $('#pacman').position().top + $('#pacman').height();
    pacMan.id = "#pacman";
    pacMan.moving = false;
  }

  function startCounter(){
    var countdownTimer;
    var countdown = 3;
    countdownTimer = setInterval(function(){
      $("#score").html(countdown);
      if (countdown == 0) {
        clearInterval(countdownTimer);
        runGame();

        ghostsMoving = true;
        runGhosts();
      }else{
        $("#score").html(countdown);
      }
      countdown-=1;
    }, 500);
  }


  function wonGame(){
    stopObj(pacMan);
    $("#score").remove();
    $(".current-score-display").append('<h1>You Won!</h1>');
    $(".current-score-display").append('<button type="button" id="toLeaderboardButton">Add to Leaderboard</button>');

    $("#toLeaderboardButton").click(function(){
      $(".current-score-display h1").remove();
      $("#toLeaderboardButton").remove();
      $(".current-score-display").append('<input id="playerName" type="text" placeholder="Name">');
      $(".current-score-display").append('<button type="button" id="addToBoard">Add to Leaderboard</button>');

      $("#addToBoard").click(function(){
        updateBoard();
        setupGame();
      });
    });
  }

  /**********************************************/
  /*--Func for setting event listeners on game--*/
  /**********************************************/

  function runGame(){

    $("#score").html("GO!");

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
          changeDir(pacMan, "up");
          break;
        case "ArrowDown":
          changeDir(pacMan, "down");
          break;
        case "ArrowRight":
          changeDir(pacMan, "right");
          break;
        case "ArrowLeft":
          changeDir(pacMan, "left");
          break;
        case "Enter":
          event.preventDefault();
          console.log("Left: " + pacMan.left);
          console.log("Right: " + pacMan.right);
          console.log("Top: " + pacMan.top);
          console.log("Bottom: " + pacMan.bottom);
          break;
        case "r":
          event.preventDefault();
          changeDir()
          break;
        case " ":
          stopObj(pacMan);
          ghostsMoving = false;
          break;
        default:
      }
    });
  }

  /*******************************************************/
  /*-------------Funcs for moving PacMan-----------------*/
  /*******************************************************/

  //function for calling movePac on a timer until another direction key is pressed
  function changeDir(objType, direction){
    //if Pac isnt already moving
    if(!objType.moving){
      intervalTimer = setInterval(function(){
        //move him every 1/nth of a second
        moveObj(pacMan, direction);
      }, 150);
      objType.moving=true;
    }else{
      //if he is moving then stop the timer, and call recursively to get him moving in the new direction
      clearInterval(intervalTimer);
      objType.moving = false;
      changeDir(objType, direction);
    }
  }

  //Function for moving pacman in each of the four directions
  function moveObj(objType, direction){

    if(objType.left== 565 && objType.top == 245 && previousDir == "right"){
      objType.left = 5;
      objType.right = objType.left += 30;
      $(objType.id).css('left', objType.left + 'px');
      $(objType.id).css('transform', 'rotate(0deg)');
      objType.previousDir = "right";
    }else if (objType.left <= -20 && objType.top == 245 && previousDir == "left") {
      objType.left = 565;
      objType.right = objType.left += 30;
      $(objType.id).css('left', objType.left + 'px');
      $(objType.id).css('transform', 'rotate(0deg)');
      objType.previousDir = "left";
    }else{
      var squareOptions = checkOptions(objType);
      if(direction == "right" && squareOptions.right == true){
        objType.left+=jumpDist;
        objType.right+=jumpDist;
        $(objType.id).css('left', objType.left + 'px');
        $(objType.id).css('transform', 'rotate(0deg)');
        objType.previousDir = "right";
        checkForCoin(objType.left+12.5, objType.top+12.5);
      }else if (direction == "left" && squareOptions.left == true){
        objType.left-=jumpDist;
        objType.right-=jumpDist;
        $(objType.id).css('left', objType.left + 'px');
        $(objType.id).css('transform', 'rotate(180deg)');
        objType.previousDir = "left";
        checkForCoin(objType.left+12.5, objType.top+12.5);
      }else if (direction == "down" && squareOptions.down == true){
        objType.top+=jumpDist;
        objType.bottom+=jumpDist;
        $(objType.id).css('top', objType.top + 'px');
        $(objType.id).css('transform', 'rotate(90deg)');
        objType.previousDir = "down";
        checkForCoin(objType.left+12.5, objType.top+12.5);
      }else if (direction == "up" && squareOptions.up == true){
        objType.top-=jumpDist;
        objType.bottom-=jumpDist;
        $(objType.id).css('top', objType.top + 'px');
        $(objType.id).css('transform', 'rotate(270deg)');
        objType.previousDir = "up";
        checkForCoin(objType.left+12.5, objType.top+12.5);
      }
    }
  }
  //function for stopping pac moving
  function stopObj(objType){
    clearInterval(intervalTimer);
    objType.moving = false;
  }

  function checkOptions(objType){
    var previousOpt = {};

    for (var i = 0; i < decisionSquares.length; i++) {
      if (decisionSquares[i].leftPosition == objType.left && decisionSquares[i].topPosition == objType.top) {
        return decisionSquares[i];
      }
    }

    if(objType.previousDir == "right" || objType.previousDir == "left"){
      previousOpt.up = false;
      previousOpt.down = false;
      previousOpt.left = true;
      previousOpt.right = true;
    }else if (objType.previousDir == "up" || objType.previousDir == "down") {
      previousOpt.up = true;
      previousOpt.down = true;
      previousOpt.left = false;
      previousOpt.right = false;
    }

    return previousOpt;
  }

  /**************************************************/
  /*----------Funcs for manipulating coins----------*/
  /**************************************************/

  //function for adding coins to the screen
  function addCoins(){

    //The number of squares that we will looping through
    var numberOfSquares = decisionSquares.length;
    //loop through all the squares
    for (var y = 0; y < numberOfSquares; y++) {
      //current square
      var startSquare = decisionSquares[y];
      var numOfConnectedSquares = startSquare.connectedSquares.length;
      //loop through each square connected to the current square
      for (var x = 0; x < numOfConnectedSquares; x++) {
        //if the current square is horizontal to its connected square
        if(startSquare.topPosition == decisionSquares[startSquare.connectedSquares[x]].topPosition){
          //the values the coins will go between
          var startLeft = startSquare.leftPosition + 12.5;
          var startTop = startSquare.topPosition + 12.5;
          var endLeft = decisionSquares[startSquare.connectedSquares[x]].leftPosition + 12.5;

          //if moving in the positive direction
          if(endLeft > startLeft){
            for (var i = startLeft; i <= endLeft; i+=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + i + 'px; top: ' + startTop + 'px">');
            }
          }
          //if moving in the negative direction
          else{
            for (var i = startLeft; i >= endLeft; i-=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + i + 'px; top: ' + startTop + 'px">');
            }
          }
        }
        //if the current square is vertical from its connected square
        if (startSquare.leftPosition == decisionSquares[startSquare.connectedSquares[x]].leftPosition) {
          //the values the coins will go between
          var startLeft = startSquare.leftPosition + 12.5;
          var startTop = startSquare.topPosition + 12.5;
          var endTop = decisionSquares[startSquare.connectedSquares[x]].topPosition + 12.5;
          //if moving in the negative direction
          if (startTop > endTop) {
            for (var i = startTop; i >= endTop; i-=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + startLeft + 'px; top: ' + i + 'px">');
            }
          }
          //if moving in the positive direction
          else{
            for (var i = startTop; i <= endTop; i+=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + startLeft + 'px; top: ' + i + 'px">');
            }
          }
        }
      }
    }
  }

  function removeCoin(pacLeft, pacTop){
    $(document).find(".coin-icon").filter(function() {
      return this.style['left'] == pacLeft && this.style['top'] == pacTop;
    }).remove();
    updateScore();
  }

  function checkForCoin(pacLeft, pacTop){
    var coins = $('.coin-icon').filter(function() {
        return this.style['top'] == (pacTop + "px") && this.style['left'] == (pacLeft + "px");
    });
    if(coins.length > 0){
      removeCoin(pacLeft + "px", pacTop + "px");
    }
  }

  /*************************************/
  /*----Funcs for updating GUI---------*/
  /*************************************/

  function updateScore(){
    score+=10;
    $("#score").html("Current score: " + score);
    if(score==5680){
      wonGame();
    }
  }

  function updateBoard(){
    var name = $("#playerName").val();
    var obj = {
      name: name,
      gameScore: score
    }
    leaderboardScores.push(obj);
    $(".leaderboard").empty();
    leaderboardScores.sort(function(obj1, obj2) {
      return obj1.gameScore - obj2.gameScore;
    });

    for (var i = 0; i < leaderboardScores.length && i <=4;  i++) {
      var rowId = "row" + i;
      var currentName = "<p>" + leaderboardScores[i].name + "</p>"
      var currentScore = "<p>" + leaderboardScores[i].gameScore + "</p>";
      $(".leaderboard").prepend('<div class="leaderboard-row" id="' + rowId + '"></div>');
      rowId = "#" + rowId;
      $(rowId).append(currentName);
      $(rowId).append(currentScore);
    }
  }

  /**********************************************/
  /*-----------Ghosts Funcs---------------------*/
  /**********************************************/

  function addGhosts(){
    for (var i = 0; i < 4; i++) {
      var html = '<img src="img/ghost' + i + '.png" class="ghosts" id="ghost' + i + '" alt="">';
      $(".game-area").append(html);
    }
    setGhostPositions();
  }

  function setGhostPositions(){
    for (var i = 0; i < 4; i++) {
      var currentGhost = {};
      currentGhost.left = $("#ghost" + i).position().left;
      currentGhost.right = $("#ghost" + i).position().left + $("#ghost" + 1).width();
      currentGhost.top = $("#ghost" + i).position().top;
      currentGhost.bottom = $("#ghost" + i).position().top + $("#ghost" + 1).height();
      currentGhost.moving = false;
      currentGhost.id = "#ghost" + i;
      ghosts.push(currentGhost)
    }
  }

  function runGhosts(){
    var timer;
    timer = setInterval(function(){
      if (ghostsMoving) {
        console.log("Ghosts");
      }else{
        console.log("Stopped Ghosts");
        clearInterval(timer);
      }
    }, 500);
  }

});
