$(function(){
  /**********************************************************/
  /*---------Hard Coded Data for decison squares -----------*/
  /**********************************************************/
  var decisionSquares = [];
  var data = [[15, 15, false, true, true, false, [1, 6]],
  [125, 15, false, true, true, true, [0, 2, 7]],
  [245, 15, false, false, true, true, [1, 9]],
  [305, 15, false, true, true, false, [4, 10]],
  [425, 15, false, true, true, true, [3, 5, 12]],
  [525, 15, false, false, true, true, [4, 13]],
  [15, 85, true, true, true, false, [0, 7, 14]],
  [125, 85, true, true, true, true, [1, 6, 8, 15]],
  [185, 85, false, true, true, true, [7, 9, 16]],
  [245, 85, true, true, false, true, [2, 8, 10]],
  [305, 85, true, true, false, true, [3, 9, 11]], //10
  [365, 85, false, true, true, true, [10, 12, 19]],
  [425, 85, true, true, true, true, [4, 11, 13, 20]],
  [525, 85, true, false, true, true, [5, 12, 21]],
  [15, 135, true, true, false, false, [6, 15]],
  [125, 135, true, false, true, true, [7, 14, 26]],
  [185, 135, true, true, false, false, [8, 17]],
  [245, 135, false, false, true, true, [6, 23]],
  [305, 135, false, true, true, false, [19, 24]],
  [365, 135, true, false, false, true, [11, 18]],
  [425, 135, true, true, true, false, [12, 21, 29]],
  [525, 135, true, false, false, true, [13, 20]],
  [185, 185, false, true, true, false, [23, 27]],
  [245, 185, true, true, false, true, [17, 22, 24]],
  [305, 185, true, true, false, true, [18, 23, 25]],
  [365, 185, false, false, true, true, [24, 28]],
  [125, 245, true, true, true, true, [15, 27, 33]],
  [185, 245, true, false, true, true, [22, 26, 30]],
  [365, 245, true, true, true, false, [25, 29, 31]],
  [425, 245, true, true, true, true, [20, 28, 38]],
  [185, 295, true, true, true, false, [27, 31, 34]],
  [365, 295, true, false, true, true, [28, 30, 37]],
  [15, 345, false, true, true, false, [33, 40]],
  [125, 345, true, true, true, true, [26, 32, 34, 42]],
  [185, 345, true, true, false, true, [30, 33, 35]],
  [245, 345, false, false, true, true, [34, 44]],
  [305, 345, false, true, true, false, [37, 45]],
  [365, 345, true, true, false, true, [31, 36, 38]],
  [425, 345, true, true, true, true, [29, 37, 39, 47]],
  [525, 345, false, false, true, true, [38, 49]],
  [15, 405, true, true, false, false, [32, 41]],
  [65, 405, false, false, true, true, [40, 51]],
  [125, 405, true, true, true, false, [33, 43, 52]],
  [185, 405, false, true, true, true, [42, 44, 53]],
  [245, 405, true, true, false, true, [35, 43, 45]],
  [305, 405, true, true, false, true, [36, 44, 46]],
  [365, 405, false, true, true, true, [45, 47, 56]],
  [425, 405, true, false, true, true, [38, 46, 57]],
  [485, 405, false, true, true, false, [49, 58]],
  [525, 405, true, false, false, true, [39, 48]],
  [15, 455, false, true, true, false, [51, 60]],
  [65, 455, true, true, false, true, [41, 50, 52]],
  [125, 455, true, false, false, true, [42, 51]],
  [185, 455, true, true, false, false, [43, 54]],
  [245, 455, false, false, true, true, [53, 61]],
  [305, 455, false, true, true, false, [56, 62]],
  [365, 455, true, false, false, true, [46, 55]],
  [425, 455, true, true, false, false, [47, 58]],
  [485, 455, true, true, false, true, [48, 57, 59]],
  [525, 455, false, false, true, true, [58, 63]],
  [15, 505, true, true, false, false, [50, 61]],
  [245, 505, true, true, false, true, [54, 60, 62]],
  [305, 505, true, true, false, true, [55, 61, 63]],
  [525, 505, true, false, false, true, [59, 62]]];

  /************************************************/
  /*----Initial Var Setup & Running of Game-------*/
  /************************************************/

  var leaderboardScores = [];
  var ghosts = [];
  var pacMan = {};
  var score = 0;
  var jumpDist = 10;
  var paused = false;

  for(var i =0; i < data.length; i++){
    decisionSquares[i] = addSquare(data[i]);
  }

  //Starts the Game!
  setupGame();

  /*********************************************/
  /*----Funcs for starting/ending Game---------*/
  /*********************************************/

  function addSquare(dataRow){
    var tempObj = {};
    tempObj.leftPosition = dataRow[0];
    tempObj.topPosition = dataRow[1];
    tempObj.up =  dataRow[2];
    tempObj.right = dataRow[3];
    tempObj.down = dataRow[4];
    tempObj.left = dataRow[5];
    tempObj.connectedSquares = dataRow[6];
    return tempObj;
  }

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
      }else{
        $("#score").html(countdown);
      }
      countdown-=1;
    }, 500);
  }


  function gameEnd(outcome){
    var addedToLeaderboard = false;
    pause();
    $(document).unbind("keyup");
    $(".current-score-display").empty();
    if(outcome == "win"){
      $(".current-score-display").append('<h3>You Won! Your score was: <span id="score"></span></h3>');
    }else{
      $(".current-score-display").append('<h3>You Lose! Your score was: <span id="score"></span></h3>');
      $("#score").html(score);
    }

    $(".current-score-display").append('<button type="button" id="toLeaderboardButton">Add to Leaderboard</button>');

    $("#toLeaderboardButton").click(function(){
      $(".current-score-display h1").remove();
      $("#toLeaderboardButton").remove();
      $(".current-score-display").append('<input id="playerName" type="text" placeholder="Name">');
      $(".current-score-display").append('<button type="button" id="addToBoard">Add to Leaderboard</button>');

      $("#addToBoard").click(function(){
        addedToLeaderboard = updateBoard();
        if(addedToLeaderboard){
          setupGame();
        }
      });
    });
  }

  /**********************************************/
  /*--Func for setting event listeners on game--*/
  /**********************************************/

  function turnOnMusic(){
    musicTimer = setInterval(function(){
      $("audio")[0].play();
    }, 50);
  }

  function runGame(){

    turnOnMusic();
    $("#score").html("GO!");
    changeDir(ghosts[0], "right");
    changeDir(ghosts[1], "left");
    changeDir(ghosts[2], "right");
    changeDir(ghosts[3], "left");

    //Event Listener that stop default action of spacebar being pressed
    $(document).keydown(function(event) {
      if(event.key == " " || event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowLeft"){
        event.preventDefault();
      }
    })

    //Event Listener for keyboard presses
    $(document).keyup(function(event) {
      if(!paused){
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
          default:
        }
      }
      if(event.key == " "){
        pause();
      }
    });
  }

  /*******************************************************/
  /*-------------Funcs for moving PacMan-----------------*/
  /*******************************************************/

  //function for calling movePac on a timer until another direction key is pressed
  function changeDir(objType, direction){
    if(!objType.moving){
      objType.timer = setInterval(function(){
        moveObj(objType, direction);
      }, 200);
      objType.moving=true;
    }else{
      clearInterval(objType.timer);
      objType.moving = false;
      changeDir(objType, direction);
    }
  }

  //Function for moving pacman in each of the four directions
  function moveObj(objType, direction){

    if(objType.left== 565 && objType.top == 245 && objType.previousDir == "right"){
      objType.left = 5;
      objType.right = objType.left += 30;
      $(objType.id).css('left', objType.left + 'px');
      $(objType.id).css('transform', 'rotate(0deg)');
      objType.previousDir = "right";
    }else if (objType.left <= -20 && objType.top == 245 && objType.previousDir == "left") {
      objType.left = 565;
      objType.right = objType.left += 30;
      $(objType.id).css('left', objType.left + 'px');
      $(objType.id).css('transform', 'rotate(0deg)');
      objType.previousDir = "left";
    }else{
      var squareOptions = checkOptions(objType);

      var tempArr = [];
      if(objType.id != "#pacman"){
        $.each(squareOptions, function( key, value ) {
           if(value == true){
             tempArr.push(key);
           }
        });
        tempArr = tempArr.filter(function(elem){
          return elem != objType.oppDir;
        });
        direction = tempArr[Math.floor(Math.random() * tempArr.length)];
      }

      if(direction == "right" && squareOptions.right == true){
        objType.left+=jumpDist;
        objType.right+=jumpDist;
        $(objType.id).css('left', objType.left + 'px');
        //$(objType.id).css('transform', 'rotate(0deg)');
        objType.previousDir = "right";
        objType.oppDir = "left";
      }else if (direction == "left" && squareOptions.left == true){
        objType.left-=jumpDist;
        objType.right-=jumpDist;
        $(objType.id).css('left', objType.left + 'px');
        //$(objType.id).css('transform', 'rotate(180deg)');
        objType.previousDir = "left";
        objType.oppDir = "right";
      }else if (direction == "down" && squareOptions.down == true){
        objType.top+=jumpDist;
        objType.bottom+=jumpDist;
        $(objType.id).css('top', objType.top + 'px');
        //$(objType.id).css('transform', 'rotate(90deg)');
        objType.previousDir = "down";
        objType.oppDir = "up";
      }else if (direction == "up" && squareOptions.up == true){
        objType.top-=jumpDist;
        objType.bottom-=jumpDist;
        $(objType.id).css('top', objType.top + 'px');
        //$(objType.id).css('transform', 'rotate(270deg)');
        objType.previousDir = "up";
        objType.oppDir = "down";
      }
      checkSpace(objType);
      checkCollisions();
    }
  }

  function checkCollisions(){
    var directions = ["left", "right", "top", "bottom"];

    for (var i = 0; i < ghosts.length; i++) {
      if(pacMan.left >= ghosts[i].left && pacMan.left <= ghosts[i].right && pacMan.top >= ghosts[i].top && pacMan.top <= ghosts[i].bottom){
        gameEnd("lose");
      }
    }
  }

  function checkSpace(objType){
    if(objType.id == "#pacman"){
      checkForCoin(objType.left+12.5, objType.top+12.5)
    }
  }

  function checkOptions(objType){
    var previousOpt = {};

    for (var i = 0; i < decisionSquares.length; i++) {
      if (decisionSquares[i].leftPosition == objType.left && decisionSquares[i].topPosition == objType.top) {
        return decisionSquares[i];
      }
    }

    if(objType.previousDir == "right" || objType.previousDir == "left"){
      previousOpt.left = true;
      previousOpt.right = true;
    }else if (objType.previousDir == "up" || objType.previousDir == "down") {
      previousOpt.up = true;
      previousOpt.down = true;
    }
    return previousOpt;
  }

  /**************************************************/
  /*----------Funcs for manipulating coins----------*/
  /**************************************************/

  //function for adding coins to the screen
  function addCoins(){

    for (var y = 0; y < decisionSquares.length; y++) {
      var startSquare = decisionSquares[y];
      //loop through each square connected to the current square
      for (var x = 0; x < startSquare.connectedSquares.length; x++) {
        var startLeft = startSquare.leftPosition + 12.5;
        var startTop = startSquare.topPosition + 12.5;

        //if the current square is horizontal to its connected square
        if(startSquare.topPosition == decisionSquares[startSquare.connectedSquares[x]].topPosition){

          var endLeft = decisionSquares[startSquare.connectedSquares[x]].leftPosition + 12.5;
          if(endLeft > startLeft){
            for (var i = startLeft; i <= endLeft; i+=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + i + 'px; top: ' + startTop + 'px">');
            }
          }
          else{
            for (var i = startLeft; i >= endLeft; i-=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + i + 'px; top: ' + startTop + 'px">');
            }
          }
        }
        //if the current square is vertical from its connected square
        if (startSquare.leftPosition == decisionSquares[startSquare.connectedSquares[x]].leftPosition) {

          var endTop = decisionSquares[startSquare.connectedSquares[x]].topPosition + 12.5;
          if (startTop > endTop) {
            for (var i = startTop; i >= endTop; i-=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + startLeft + 'px; top: ' + i + 'px">');
            }
          }
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
      gameEnd("won");
    }
  }

  function updateBoard(){
    if($("#playerName").val()){
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
      return true;
    }else{
      return false;
    }
  }


  function pause(){
    if(!paused){
      clearInterval(musicTimer);
      paused = true;
      clearInterval(pacMan.timer);
      $(".current-score-display").empty();
      $(".current-score-display").append('<h1>Game Pauesed</h1>');
      for(var i=0; i < ghosts.length; i++){
        clearInterval(ghosts[i].timer);
      }
    }else {
      paused = false;
      turnOnMusic();
      changeDir(pacMan, pacMan.previousDir);
      $(".current-score-display").empty();
      $(".current-score-display").append('<h1 id="score"></h1>');
      $("#score").html(score);
      for(var i=0; i < ghosts.length; i++){
        changeDir(ghosts[i], ghosts[i].previousDir);
      }
    }
  }

  /**********************************************/
  /*-----------Ghosts Setup Funcs---------------*/
  /**********************************************/

  function addGhosts(){
    for (var i = 0; i < 4; i++) {
      var html = '<img src="img/ghost' + i + '.png" class="ghosts" id="ghost' + i + '" alt="">';
      $(".game-area").append(html);
    }
    setGhostPositions();
  }

  function setGhostPositions(){
    ghosts.length = 0;
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

});
