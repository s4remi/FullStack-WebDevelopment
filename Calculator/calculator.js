console.log("welcome to calculator!");
const express = require("express");
const port = 3500;
app = express();
/**NOTICE
 * we need bodypaser  to allow us to pass info from get method
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
BUT, Body parser comes baked in to express,
 o just add the following line of code before your routes:
app.use(express.urlencoded({ extended: true }));
*/
app.use(express.urlencoded({ extended: true }));
//add 3000 port to listen
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", function (req, res) {
  res.send("welcome to the <em><span>M<span><em>ain page!");
});
app.get("/cal", function (req, res) {
  /**
   *   // hard copy the path
  res.sendFile(
    "/Users/nobody1/Desktop/WebDev/code exercises/Calculator/index.html"
  );
   send the index.html file for the response,
   * but as we are going to upload our website on cloud we should
   * use the entire path by using  so it is easier to use __dirname" or "__filename"
   * //console.log(__dirname);
   */

  //use the shortcut for the path
  res.sendFile(__dirname + "/index.html");
});

// adding post method in order to  deal with info that received from user input.
//It should be added to the main page instead of just the /cal
app.post("/", function (req, res) {
  console.log(req.body);
  var num = Number(req.body.num1);
  console.log(num);
  var otherNum = Number(req.body.num2);
  var total = num + otherNum;
  res.send(`the total is ${total}`);
});
