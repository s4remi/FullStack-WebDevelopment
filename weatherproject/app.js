console.log("Hi there!");
const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

//make HTTP requests in Node.js as request module is deprecated
const https = require("https");
//const url ="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single";

// add get method
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityName;
  const appid = "9b8c7b10dac45094197806527e8bc9c5";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    appid +
    "&units=" +
    unit;
  console.log("post received!");
  console.log(req.body);
  console.log(req.body.cityName + "\n****");
  // using https to get response from other api
  https
    .get(url, function (response) {
      console.log(response);
      console.log("\n------------\n");
      console.log(`response.statusCode: ${response.statusCode}`);
      console.log("\n--------\n");
      console.log(`headers: \n${response.headers}`);

      //using the "on" method to searching for the data
      response.on("data", function (d) {
        console.log("\n****  `data: ${d}` ***\n");
        console.log(d); //`data:\t${d}`
        console.log(
          "\n****   process.stdout.write(d); this is the equivalent of console.log(d) ***\n"
        );
        process.stdout.write(d);
        console.log("\n **** JSON.parse(d) ****\n");
        // make it readable for us by converting it to JSON version
        const weatherData = JSON.parse(d);
        console.log(weatherData);

        //how to use data and reach to them
        const temp = weatherData.main.temp;
        console.log(`the temp is:\t${temp}`);
        //weather[0].description
        const desc = weatherData.weather[0].description;
        console.log(`the weather description is\t${desc}`);
        const country = weatherData.sys.country;
        const city = weatherData.name;
        const icon =
          "https://openweathermap.org/img/wn/" +
          weatherData.weather[0].icon +
          "@2x.png";
        console.log(icon);

        // but better practice is use write method instead of send
        res.write(
          "<h1>the temperature in the " +
            city +
            " is\t " +
            temp +
            " degrees Celsius.</h1>"
        );
        res.write("The city name is " + city + ".</br>");
        res.write("The weather condition is :" + desc);
        //importing the image
        res.write("<img src=" + icon + "></img>");

        res.send();

        //we can use add and continue
        // res.send(
        //   "<h1>the temperature in the London is " +
        //     temp +
        //     " degrees Celsius.</h1>" +
        //     "<h2>the weather is currently " +
        //     desc +
        //     ". </h2>"
        // ); // send response to client

        /**
         * let say we have an object and want to see it as string instead of JSON version by using JSON.stringify
         */

        const object = {
          name: "test",
          author: "Ali",
          age: 30,
          hometown: "sky",
          favoriteFood: "pizza",
        };
        console.log("+++++++++++++ test +++++++++++++");
        console.log(object);
        console.log("========= compare ========");
        console.log(`${JSON.stringify(object)}`);
      });
    })
    .on("error", (e) => {
      console.log(`e:\t${e}`);
    });
  //res.send("<h1>Hello world! </h1>" + temp); // send response to client when
});

//listening port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
