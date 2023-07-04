console.log("we are in the server!");
const { request, response } = require("express");

// it is a good practice to use const express & const app
const express = require("express");
const app = express();
// app.get allows us to what should happen when a browser get in touch with our server
// the first parameter is the location that we represent it by "/"
// the second parameter is the callback function
// app.get("/", function (request, response) {
// // code to handle get requests
//   console.log(request);
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
