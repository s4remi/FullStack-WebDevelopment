console.log("Hi we are here!");
import express from "express";

const app = express();
const port = 4500;

app.get("/", function (req, res) {
  const today = new Date("2022-03-22");
  const day = today.getDay();

  console.log(day);
  //res.send("<h1>Hello World</h1>");

  let type = "a weekday";
  let adv = "It's time to work hard!";
  if (day === 0 || day === 6) {
    type = "weekend";
    adv = "Time for a break!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
