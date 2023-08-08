console.log("Hi we are here!");
import express from "express";

const app = express();
const port = 4500;

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`the server is running in port ${port}`);
});
