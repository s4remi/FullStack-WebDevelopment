console.log("Hi, The start!");
import express from "express";

const app = express();
const port = 4500;

app.get("/", function (req, res) {
  const today = new Date("2022-03-28", "15:181");
  const day = today.getDay();
  console.log(`the day is : ${day}`);
  for (let i = 0; i < 7; i++) {
    var date = new Date("2022/03/" + String(today.getDate));
    console.log("we here!");
    console.log(date);
  }

  //console.log(day);
  //res.send("<h1>Hello World</h1>");

  let type = "a weekday";
  let adv = "It's time to work hard!";
  if (day === 0 || day === 6) {
    type = "the weekend";
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
