console.log("welcome to calculator!");
const express = require("express");
const port = 3500;

app = express();

//add 3000 port to listen
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", function (req, res) {
  res.send("welcome to the <em><span>M<span><em>ain page!");
});
app.get("/cal", function (req, res) {
  //hard copy the path
  // res.sendFile(
  //   "/Users/nobody1/Desktop/WebDev/code exercises/Calculator/index.html"
  // );
  /** send the index.html file for the response,
   * but as we are going to upload our website on cloud we should
   * use the entire path by using  so it is easier to use __dirname" or "__filename"
   */
  //console.log(__dirname);
  //use the shortcut for the path
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  res.send("Thanks for sending info!");
});
