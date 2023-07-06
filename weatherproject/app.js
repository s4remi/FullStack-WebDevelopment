console.log("Hi there!");
const express = require("express");
const app = express();
const port = 3000;

//listening port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// add get method
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>"); // send response to client when
});
