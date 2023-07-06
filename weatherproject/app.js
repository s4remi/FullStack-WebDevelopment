console.log("Hi there!");
const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

//make HTTP requests in Node.js
const https = require("https");
const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single";

// add get method
app.get("/", function (req, res) {
  // using https to get response from other api
  https.get(url, (response) => {
    console.log(response);
  });
  res.send("<h1>Hello World!</h1>"); // send response to client when
});

//listening port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
