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
