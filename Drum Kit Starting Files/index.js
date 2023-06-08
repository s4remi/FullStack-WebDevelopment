/*
// FOR selecting the first button, using standard addEventListener
document.querySelector("button").addEventListener("click", handleClick);
function handleClick() {
  alert("i got clicked!");
}
// FOR selecting the first button, using better way to use addEventListener
// in here using anonymous function style
document.queryselector("button").addEventListener("click", function () {
  alert("i got clicked!");
});
*/

//-----------
/*
// FOR SELECTING ALL BUTTONS V1
const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  //alert("i got d!");
  var name = "./sounds.tom-";
  var audio = new Audio("./sounds/tom-1.mp3");
  audio.play();
}
*/

//------------------

// FOR SELECTING ALL BUTTONS V2

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var key = this.innerHTML;
    switch (key) {
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
    }
  });
}
// include keyboard for making sounds
document.addEventListener("keydown", function (e) {
  console.log("this key was clicked! " + e.key);
  var key = e.key;
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  }
});