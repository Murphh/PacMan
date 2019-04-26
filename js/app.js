$(function(){

  /**********************************************************/
  /*---------Hard Coded Data for decison squares -----------*/
  /* Represents the squares on the board on which you can   */
  /* change direction                                       */
  /**********************************************************/
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
  [305, 85, true, true, false, true, [3, 9, 11]],
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
  /*----        Initial Variable Set       -------*/
  /*- Global Variables which are used throughout -*/
  /************************************************/

  var decisionSquares = [];
  var leaderboardScores = [];
  var ghosts = [];
  var pacMan = {};
  var score = 0;
  var jumpDist = 10;
  var paused = false;
  var difficulty;
  var maxScore = 5680;

  //creates an object from each row of the hard coded data
  for(var i =0; i < data.length; i++){
    decisionSquares[i] = addSquare(data[i]);
  }

  //object builder function for each square of the board where you can change direction
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

  /*************************************************/
  /*------------------Game Start-------------------*/
  /* Sets up the game when the page loads and adds */
  /* event listeners to the leaderboard options    */
  /*************************************************/

  setupGame();

  //filter the leaderboard based on user input
  $("#filterScores").click(function(){
    $("#pressMusic")[0].play();
    $(".leaderboard").empty();
    var numOfEntries = 0;
    for (var i = 0; i < leaderboardScores.length; i++) {
      if(leaderboardScores[i].name == $("#filterVal").val()){
        addRow(numOfEntries, leaderboardScores[i]);
      }
    }
      $("#filterVal").val("");
  });

  $("#instructionsButton").click(function(){
    optionsChange("#leaderboardOption", "#instructionsOption", "#leaderboardButton", "#instructionsButton");
  });

  $("#leaderboardButton").click(function(){
    optionsChange("#instructionsOption", "#leaderboardOption", "#instructionsButton", "#leaderboardButton");
  });

  /************************************************/
  /*----     GUI Manipulation Functions    -------*/
  /************************************************/

  //Highlights whether youre viewing the leaderboardButton or instructions page
  function optionsChange(offVar, onVar, offButton, onButton){
    $("#pressMusic")[0].play();
    $(offVar).css("display", "none");
    $(onVar).css("display", "block")
    $(offButton).removeClass("active-button");
    $(onButton).addClass("active-button");
  }

  //creates an entry pm the leaderboard
  function addRow(rowNum, entry){
    var rowId = "row" + rowNum;
    var currentName = "<p>" + entry.name + "</p>"
    var currentScore = "<p>" + entry.gameScore + "</p>";
    $(".leaderboard").prepend('<div class="leaderboard-row" id="' + rowId + '"></div>');
    rowId = "#" + rowId;
    $(rowId).append(currentName);
    $(rowId).append(currentScore);
  }

  //Updates our records for the leaderboard and then displays it to the user interface
  function updateBoard(){
    if($("#playerName").val()){
      leaderboardScores.push({
        name: $("#playerName").val(),
        gameScore: score
      });
      $(".leaderboard").empty();

      //sorts the leaderboard data from highest to lowest
      leaderboardScores.sort(function(obj1, obj2) {
        return obj1.gameScore - obj2.gameScore;
      });

      for (var i = 0; i < leaderboardScores.length && i <=4;  i++) {
        addRow(i, leaderboardScores[i]);
      }
      return true;
    }else{
      return false;
    }
  }

  //Updates the players score dependant on the game difficulty
  function updateScore(type){
    if(difficulty == "Easy" || difficulty == "Trump Mode"){
      score+=10;
      if(score==maxScore){
        gameEnd("win");
      }
    }else{
      score+=20;
      if(score==(maxScore*2)){
        gameEnd("win");
      }
    }
    $("#score").html("Current score: " + score);
    $("#eatMusic")[0].play();
  }

  /*********************************************/
  /*-----------------Game Setup----------------*/
  /*********************************************/

  //Displays difficulty options to the user
  function setupGame(){
    $(".current-score-display").empty();
    $(".current-score-display").append('<button type="button" id="startGame">Start Game!</button>');
    $(".current-score-display").append('<button type="button" class="difficulty">Easy</button>');
    $(".current-score-display").append('<button type="button" class="difficulty">Hard</button>');
    $(".current-score-display").append('<button type="button" class="difficulty">Trump Mode</button>');

    //resets user score to 0 and adds PacMan append all the coins to the board
    score = 0;
    addPacMan();
    addCoins();

    //on clicks the difficulty is set and the game countdown begins
    $(".difficulty").click(function(){
      setDifficulty($(this).html());
      $("#startGame").css("display", "block");
      $(".difficulty").remove();
    });

    $("#startGame").click(function(){
      $("#pressMusic")[0].play();
      $(".current-score-display").append('<h1 id="score"></h1>');
      $("#startGame").remove();
      startCounter();
    });
  }

  //3,2,1 countdown for game starting
  function startCounter(){
    var countdownTimer;
    var countdown = 3;
    countdownTimer = setInterval(function(){
      $("#score").html(countdown);

      //when it reaches 0, stop the timer and run the game
      if (countdown == 0) {
        clearInterval(countdownTimer);
        runGame();
      }else{
        $("#score").html(countdown);
      }
      countdown--;
    }, 500);
  }

  //turns on the game background music, cleared when the game ends
  function turnOnMusic(){
    musicTimer = setInterval(function(){
      $("#themeMusic")[0].play();
    }, 50);
  }

  //Function for passing necessary data to generate the ghosts based on chosen difficulty
  function setDifficulty(htmlString){
    difficulty = htmlString;
    switch (htmlString) {
      case "Easy":
        addGhosts("ghost", 250);
        break;
      case "Hard":
        addGhosts("ghost", 120);
        break;
      case "Trump Mode":
        addGhosts("trump", 150);
        break;
      default:

    }
  };

  //function called when the game countdown reaches 0
  function runGame(){
    paused=false;
    turnOnMusic();
    $("#score").html("GO!");

    //start the ghosts off moving
    changeDir(ghosts[0], "right");
    changeDir(ghosts[1], "left");
    changeDir(ghosts[2], "right");
    changeDir(ghosts[3], "left");

    //Key binding for arrow presses
    //pause game if space bar pressed
    //move pacMan in the direction you press
    $(document).keydown(function(event) {
      if(!paused){
        switch (event.key) {
          case "ArrowUp":
            event.preventDefault();
            changeDir(pacMan, "up");
            break;
          case "ArrowDown":
            event.preventDefault();
            changeDir(pacMan, "down");
            break;
          case "ArrowRight":
            event.preventDefault();
            changeDir(pacMan, "right");
            break;
          case "ArrowLeft":
            event.preventDefault();
            changeDir(pacMan, "left");
            break;
          default:
        }
      }
      if(event.key == " "){
        event.preventDefault();
        $("#pressMusic")[0].play();
        pause();
      }
    });
  }

  /*********************************************/
  /*-----------Adding Pieces Functions---------*/
  /*********************************************/

  //Adds PacMan sprite to the game
  //Sets the necessary object properties, largely based on his position
  function addPacMan(){
    $(".game-area").empty();
    $(".game-area").append('<img class="background-img" src="img/level1-background.jpg" alt=""> <img src="img/pacman.png" class="pacman-icon"  id="pacman" alt="">');
    pacMan.left = $('#pacman').position().left;
    pacMan.right = $('#pacman').position().left + $('#pacman').width();
    pacMan.top = $('#pacman').position().top;
    pacMan.bottom = $('#pacman').position().top + $('#pacman').height();
    pacMan.id = "#pacman";
    pacMan.moving = false;
    pacMan.speed = 200;
  }

  //function for adding coins to the screen
  function addCoins(){

    for (var y = 0; y < decisionSquares.length; y++) {
      var startSquare = decisionSquares[y];

      //loop through each square connected to the current square
      for (var x = 0; x < startSquare.connectedSquares.length; x++) {
        var startLeft = startSquare.leftPosition + 12.5;
        var startTop = startSquare.topPosition + 12.5;

        //Adds coins between two horizontal squares
        if(startSquare.topPosition == decisionSquares[startSquare.connectedSquares[x]].topPosition){
          var endLeft = decisionSquares[startSquare.connectedSquares[x]].leftPosition + 12.5;
          if(endLeft > startLeft){
            for (var i = startLeft; i <= endLeft; i+=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + i + 'px; top: ' + startTop + 'px">');
            }
          }
        }
        //Adds coins between two vertical squares
        if (startSquare.leftPosition == decisionSquares[startSquare.connectedSquares[x]].leftPosition) {
          var endTop = decisionSquares[startSquare.connectedSquares[x]].topPosition + 12.5;
          if (startTop > endTop) {
            for (var i = startTop; i >= endTop; i-=10) {
              $(".game-area").append('<img src="img/coin.png" class="coin-icon" style="left:' + startLeft + 'px; top: ' + i + 'px">');
            }
          }
        }
      }
    }
  }

  //Adds the ghosts, has arguments for the image, and for their speed
  function addGhosts(img, speed){
    var html;
    for (var i = 0; i < 4; i++) {
      if(img == "ghost"){
        html = '<img src="img/ghost' + i + '.png" class="ghosts" id="ghost' + i + '" alt="">';
      }else{
        html = '<img src="img/trump.png" class="ghosts" id="ghost' + i + '" alt="">';
      }
      $(".game-area").append(html);
    }
    setGhostPositions(speed);
  }

  //Set the ghost objects which store their state
  function setGhostPositions(speed){
    ghosts.length = 0;
    for (var i = 0; i < 4; i++) {
      var currentGhost = {};
      currentGhost.left = $("#ghost" + i).position().left;
      currentGhost.right = $("#ghost" + i).position().left + $("#ghost" + 1).width();
      currentGhost.top = $("#ghost" + i).position().top;
      currentGhost.bottom = $("#ghost" + i).position().top + $("#ghost" + 1).height();
      currentGhost.moving = false;
      currentGhost.id = "#ghost" + i;
      currentGhost.speed = speed;
      ghosts.push(currentGhost)
    }
  }

  /*********************************************/
  /*-----------Moving Pieces Functions---------*/
  /*********************************************/

  //function for moving pacman/ghosts on timer
  function changeDir(objType, direction){
    //if the object isnt moving create a timer and move it on the timer interval
    if(!objType.moving){
      objType.timer = setInterval(function(){
        moveObj(objType, direction);
      }, objType.speed);
      objType.moving=true;
    }else{
      //if hes already moving, stop its current timer, and recursively call itself
      clearInterval(objType.timer);
      objType.moving = false;
      changeDir(objType, direction);
    }
  }

  //Function for moving pacman or a ghost in a given directions
  function moveObj(objType, direction){

    //two if statements for when they move between the edges of the screen
    if(objType.left== 565 && objType.top == 245 && objType.previousDir == "right"){
      objType.left = 5;
      objType.right = objType.left += 30;
      $(objType.id).css('left', objType.left + 'px');
    }else if (objType.left <= -20 && objType.top == 245 && objType.previousDir == "left") {
      objType.left = 565;
      objType.right = objType.left += 30;
      $(objType.id).css('left', objType.left + 'px');
    }else{
      //return the directions that they move in from their current position
      var squareOptions = checkOptions(objType);

      //returns a random direction that a ghost may move in
      var tempArr = [];
      if(objType.id != "#pacman"){
        //returns all possible directions for movement
        $.each(squareOptions, function( key, value ) {
            if(value == true){
              tempArr.push(key);
            }
        });
        //removes the option for it to move in the opposite direction to its current direction
        tempArr = tempArr.filter(function(elem){
          return elem != objType.oppDir;
        });
        //randomly select a suitable direction
        direction = tempArr[Math.floor(Math.random() * tempArr.length)];
      }

      //if statements relating to choosing to move in each of the four directions
      if(direction == "right" && squareOptions.right == true){
        objType.left+=jumpDist;
        objType.right+=jumpDist;
        $(objType.id).css('left', objType.left + 'px');
        rotatePac(objType, 0);
        objType.previousDir = "right";
        objType.oppDir = "left";
      }else if (direction == "left" && squareOptions.left == true){
        objType.left-=jumpDist;
        objType.right-=jumpDist;
        $(objType.id).css('left', objType.left + 'px');
        rotatePac(objType, 180);
        objType.previousDir = "left";
        objType.oppDir = "right";
      }else if (direction == "down" && squareOptions.down == true){
        objType.top+=jumpDist;
        objType.bottom+=jumpDist;
        $(objType.id).css('top', objType.top + 'px');
        rotatePac(objType, 90);
        objType.previousDir = "down";
        objType.oppDir = "up";
      }else if (direction == "up" && squareOptions.up == true){
        objType.top-=jumpDist;
        objType.bottom-=jumpDist;
        $(objType.id).css('top', objType.top + 'px');
        rotatePac(objType, 270);
        objType.previousDir = "up";
        objType.oppDir = "down";
      }

      //check the space its moved in to
      if(objType.id == "#pacman"){
        checkForObj(objType.left+12.5, objType.top+12.5, '.coin-icon');
      }
      checkCollisions();
    }
  }

  //rotate pacMan based on his new direction
  function rotatePac(objType, deg){
    if(objType.id == "#pacman"){
      var string = 'rotate(' + deg + 'deg)';
      $(objType.id).css('transform', string);
    }
  }

  /**************************************************/
  /*----------Funcs for checking spaces-------------*/
  /**************************************************/

  //Finds the possible spaces you may move to based on the current position
  function checkOptions(objType){
    var previousOpt = {};

    //if you are at a decision square just return the corresponding object, as it contains booleans for all the directions it may move in
    for (var i = 0; i < decisionSquares.length; i++) {
      if (decisionSquares[i].leftPosition == objType.left && decisionSquares[i].topPosition == objType.top) {
        return decisionSquares[i];
      }
    }

    //if not on a decision square, return that it may only move forward or backwards
    if(objType.previousDir == "right" || objType.previousDir == "left"){
      previousOpt.left = true;
      previousOpt.right = true;
    }else if (objType.previousDir == "up" || objType.previousDir == "down") {
      previousOpt.up = true;
      previousOpt.down = true;
    }
    return previousOpt;
  }

  //checks for coins at the current position, only works for coins, but could be used for other powerups
  //if it finds any it calls for them to be roemoved
  function checkForObj(objLeft, objTop, type){
    var objects = $(type).filter(function() {
        return this.style['top'] == (objTop + "px") && this.style['left'] == (objLeft + "px");
    });
    if(objects.length > 0){
      removeObj(objLeft + "px", objTop + "px", type);
    }
  }

  //remove all objects at the given location, then increment the score
  function removeObj(objLeft, objTop, type){
    $(document).find(type).filter(function() {
      return this.style['left'] == objLeft && this.style['top'] == objTop;
    }).remove();
    updateScore(type);
  }

  //check for collisions between pacmMan and ghosts
  function checkCollisions(){
    for (var i = 0; i < ghosts.length; i++) {
      if(pacMan.left >= ghosts[i].left && pacMan.left <= ghosts[i].right && pacMan.top == ghosts[i].top ){
        gameEnd("lose");
      }else if(pacMan.right <= ghosts[i].right && pacMan.right >= ghosts[i].left && pacMan.top == ghosts[i].top ){
        gameEnd("lose");
      }else if(pacMan.top >= ghosts[i].top && pacMan.top <= ghosts[i].bottom && pacMan.left == ghosts[i].left){
        gameEnd("lose");
      }else if(pacMan.bottom <= ghosts[i].bottom && pacMan.bottom >= ghosts[i].top && pacMan.left == ghosts[i].left){
        gameEnd("lose");
      }
    }
  }

  /**************************************************/
  /*----------Funcs for stopping game---------------*/
  /**************************************************/


  //End the current game
  //Provides the UI components for finishing the game and adding the final score to the leaderboard
  function gameEnd(outcome){
    var addedToLeaderboard = false;
    pause();
    $(document).unbind("keyup");

    $(".current-score-display").empty();
    if(outcome == "win"){
      $("#winMusic")[0].play();
      $(".current-score-display").append('<h3>You Won! Your score was: <span id="score"></span></h3>');
    }else{
      $("#deathMusic")[0].play();
      $(".current-score-display").append('<h3>You Lose! Your score was: <span id="score"></span></h3>');
    }
    $("#score").html(score);
    $(".current-score-display").append('<button type="button" id="toLeaderboardButton">Add to Leaderboard</button>');

    $("#toLeaderboardButton").click(function(){
      $("#pressMusic")[0].play();
      $(".current-score-display").empty();
      $(".current-score-display").append('<input id="playerName" type="text" placeholder="Name"> <button type="button" id="addToBoard">Add to Leaderboard</button>');

      $("#addToBoard").click(function(){
        $("#pressMusic")[0].play();
        addedToLeaderboard = updateBoard();
        if(addedToLeaderboard){
          setupGame();
        }
      });
    });
  }

  //pauses the current game, stops all game objects and music
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

});
