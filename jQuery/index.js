document.querySelector("h1");
$("h1");
$("h1.title");

//-------------

document.querySelectorAll("button");
$("button");

//-----------

console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
$("h1").css("font-size", "3rem");
$("h1").css("color", "red");

//----------------------
//adding new class for items
$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("margin-50 big-title");

//to see what classes that elelemt has
console.log($("h1").attr("class"));

// true or false to check an specific class that element has
console.log($("h1").hasClass("big-title"));

//changing text
$("h1").text("salaam");
// changing the style of a text using html
$("button").html("<em><strong>Hello<strong></em>");

//changing attributes with jQuery
$("a").attr("href", "https:www.google.com");

//adding event listener with Jquery

$("h1").click(function () {
  $("h1").css("color", "purple");
});

//add event listern to all buttons
$("button").click(function () {
  $("button").css("color", "white");
  $("button").css("background-color", "red");
});
//add event listern to all buttons without using Jquery
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    //button.style.color = "white";
    console.log(document.querySelectorAll("button").length);
  });
});

//or:
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  console.log("here" + i);
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "black";
  });
}
//----------------
$("input").keydown(function (evet) {
  console.log("key pressed: " + evet.key);
});
$(document).keydown(function (event) {
  $("h1").text(event.key);
});

// using "on" function for mouseover

$("h1").on("mouseover", function () {
  $("h1").css("color", "white");
});
