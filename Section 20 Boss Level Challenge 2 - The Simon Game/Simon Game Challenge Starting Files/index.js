// Define color options and initialize patterns
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Event listener to start the game on keydown
$("html").keydown(function() {
  if (!started) {  // Only start if the game hasn't started yet
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Function to generate the next sequence in the game
function nextSequence() {
  userClickedPattern = [];  // Reset user pattern for each level
  level++;  // Increase level by 1 each time
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animate the chosen button and play sound
  $("#" + randomChosenColour)
    .fadeOut(50)
    .fadeIn(50);
  playSound(randomChosenColour);
  console.log(gamePattern);
}

// Function to play sound based on the color name
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Event listener for button clicks
$(".btn").click(function () {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  // Add and remove 'pressed' class for animation effect
  $("#" + userChosenColour).addClass("pressed");
  setTimeout(function () {
    $("#" + userChosenColour).removeClass("pressed");
  }, 100);

  // Call checkAnswer to see if the user has matched the sequence so far
  checkAnswer(userClickedPattern.length - 1);
});

// Function to check the user's answer
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// Function to reset the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

