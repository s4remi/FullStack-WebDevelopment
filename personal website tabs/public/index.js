console.log("Hi, We are here!");
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const port = 1234;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));

function logger(req, res, next) {
  console.log(`the Request method is: ${req.method}`);
  console.log(`the Request URL is: ${req.url}`);
  next();
}

app.use(logger);

app.get("/", function (req, res) {
  //res.send("<h1>Hello World</h1>");
  res.sendFile(__dirname + "/index.html");
});
app.post("/submit", function (req, res) {
  const street = req.body.street;
  const pet = req.body.pet;
  console.log(`the Street Name is: ${street}\n the pet name is: ${pet}`);
  res.write("the street name is: " + street);
  res.write(`the pet name is: ${pet}`);
  //res.send("we are here! are we?");
  res.end();
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
