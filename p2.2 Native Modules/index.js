console.log('"hello node.js file!"');
const { isUtf8 } = require("buffer");
const { error } = require("console");
const ali = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");
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
ali.readFile("test.txt", (err, data) => {
  if (err) {
    throw err;
  }
  let str = data.toString();
  console.log("test.txt\t\n", str, "\n the original data is:\n ", data);
});
console.log("part2 reading file:");

//-----
ali.readFile("message.txt", "utf8", (err, mata) => {
  if (err) throw err;
  console.log(`message.txt: ${mata}`);
});
