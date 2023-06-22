console.log("hi");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

//Use jQuery to detect when any of the buttons are clicked and trigger a handler function called ali
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  userClickedPattern = [];
  $("#level-title").text("level " + level);
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  $("#pattern").css("background-color", randomChosenColour);
  // var id = "#" + randomChosenColour;
  // console.log(id);
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour) {
  $("#" + currentColour)
    .addClass("pressed")
    .fadeOut(100)
    .fadeIn(100);
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
  checkAnswer(userClickedPattern.length - 1);
}
function checkAnswer(currentLevel) {
  //check answer against pattern array, return false or continue playing sequence
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success!");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong!");
    userClickedPattern = [];
    gamePattern = [];
    $("#level-title").text("Press A Key to Start");
  }
}
