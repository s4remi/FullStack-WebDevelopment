console.log("Hi there!");
const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

//make HTTP requests in Node.js as request module is deprecated
const https = require("https");
//const url ="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9b8c7b10dac45094197806527e8bc9c5&units=metric";

// add get method
app.get("/", function (req, res) {
  // using https to get response from other api
  https
    .get(url, (response) => {
      console.log(response);
      console.log("\n------------\n");
      console.log(`response.statusCode: ${response.statusCode}`);
      console.log("\n--------\n");
      console.log(`headers: \n${response.headers}`);

      //using the "on" method to searching for the data
      response.on("data", function (d) {
        console.log("\n****  `data: ${d}` ***\n");
        console.log(`data: ${d}`);
        console.log(
          "\n****   process.stdout.write(d); this is the equivalent of console.log(d) ***\n"
        );
        process.stdout.write(d);
        console.log("\n**** JSON.parse(d) ****\n");
        // make it readable for us
        const weatherData = JSON.parse(d);
        console.log(weatherData);
      });
    })
    .on("error", (e) => {
      console.log(`e:\t${e}`);
    });
  res.send("<h1>Hello World!</h1>"); // send response to client when
});

//listening port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
