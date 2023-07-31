import express from "express";
import morgan from "morgan";

const app = express();
const port = 5000;

function logger(req, res, next) {
  console.log("the request methods is: ", req.method);
  console.log(" the request url is: ", req.url);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello in the index 3.js");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
