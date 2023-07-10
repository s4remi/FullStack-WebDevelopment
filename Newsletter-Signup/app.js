console.log("Hi!");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, function (req, res) {
  console.log(`The server is running on port ${port}`);
});
