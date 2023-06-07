var randonNumber1 = Math.floor(Math.random() * 6);
console.log(randonNumber1);
var pic = "images/dice" + randonNumber1 + ".png";
console.log(pic);
document.querySelector("img").setAttribute("src", pic);
/** second player's dice**/
var randonNumber2 = Math.floor(Math.random() * 6);
console.log(randonNumber2);
var pic2 = "images/dice" + randonNumber2 + ".png";
console.log(pic2);
document.querySelector(".img2").setAttribute("src", pic2);
