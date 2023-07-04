console.log("we are in the server!");
const { request, response } = require("express");

// it is a good practice to use const express & const app
const express = require("express");
const app = express();
// app.get allows us to what should happen when a browser get in touch with our server
// the first parameter is the location that we represent it by "/"
// the second parameter is the callback function
app.get("/", function (request, response) {
  response.send("<h1>Hi</br>; Ali!<h1>");
  //console.log(request);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/**installing the npm package called " nodemon",
 * this package help us to start the server easier.
 * for installation: make sure we are in the admin,
 * then in the terminal npm i nodemon
 * if that didn't work use " npm i -g nodemon"
 * if that didn't work use " sudo npm i -g  nodemon"
 * after installation if error occurred, get rid of them by:
 * " npm i pstree.remy@1.1.0 -D"  
 * (This issue is documented here:
https://github.com/remy/nodemon/issues/1459)
*/
