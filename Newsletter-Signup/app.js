console.log("Hi!");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
//make the server not static
app.use(express.static("./public")); //serve public folder as it's own

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  console.log("I am here!");
  const f = req.body.fname;
  const l = req.body.lname;
  const e = req.body.email;
  //console.log(req.body);
  console.log(`name: ${f}\t last name: ${l}\t email address: ${e}`);
});

app.listen(port, function (req, res) {
  console.log(`The server is running on port ${port}`);
});
