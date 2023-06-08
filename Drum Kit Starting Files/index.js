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
// FOR SELECTING ALL BUTTONS V1
const buttons = document.querySelectorAll(".drum");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick() {
  alert("i got d!");
  var audio = new Audio("./sounds/tom-2.mp3");
  audio.play();
}
// FOR SELECTING ALL BUTTONS V2
/*
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("meow");
  });
}
*/
