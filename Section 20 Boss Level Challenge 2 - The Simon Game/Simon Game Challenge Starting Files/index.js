// Define color options and initialize patterns
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Only start if the game hasn't started yet
$("html").keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
// Function to generate the next sequence in the game

function nextSequence() {
  userClickedPattern = [];
  level++;
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

  //   console.log(userClickedPattern);
});
