console.log("Hi there!");
import express from "express";
import { dirname } from "path";
const port = 300;
const app = express();

app.get("/", function (req, res) {
  let type = "a weekday";
  let adv = "work hard";

  const today = new Date("June 24, 2023 11:13:00");
  const day = today.getDay();
  console.log(day, today);
  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "have some fun";
  }
  res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
