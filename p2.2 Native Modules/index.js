console.log('"hello node.js file!"');
const { isUtf8 } = require("buffer");
const { error } = require("console");
const ali = require("fs");
ali.writeFile("test.txt", "salam azizam", (err) => {
  if (err) throw err;
  console.log("file created successfully");
  console.log("here!");
});
ali.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
console.log("we are here!");
