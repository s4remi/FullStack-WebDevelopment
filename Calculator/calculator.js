console.log("welcome to calculator!");
const express = require("express");
const port = 3500;

app = express();

//add 3500 port to listen
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", function (req, res) {
  res.send("welcome to the <em><span>M<span><em>ain page!");
});
app.get("/cal", function (req, res) {
  res.send("building an app soon!");
});
