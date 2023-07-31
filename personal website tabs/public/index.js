console.log("Hi, We are here!");
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const port = 1234;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", function (req, res) {
  //res.send("<h1>Hello World</h1>");
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
