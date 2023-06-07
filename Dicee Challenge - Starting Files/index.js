var randonNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randonNumber1);
var pic = "images/dice" + randonNumber1 + ".png";
console.log(pic);
document.querySelector("img").setAttribute("src", pic);
/** second player's dice**/
var randonNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randonNumber2);
var pic2 = "images/dice" + randonNumber2 + ".png";
console.log(pic2);
document.querySelector(".img2").setAttribute("src", pic2);
if (randonNumber1 > randonNumber2) {
  document.querySelector("h1").innerHTML = "🏆Player 1 Wins";
} else if (randonNumber1 < randonNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!🏆";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
