console.log("Hi There!");
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
const port = 3000;

//create a custom middleware
function myMiddleware(req, res, next) {
  console.log(`Request Method: num1 ${req.method}`);
  console.log(`Request URL: num2 ${req.url}`);
  console.log("second Request Method: num3 ", req.method);
  next();
}
app.use(myMiddleware);

app.get("/", function (req, res) {
  //res.write("<h1>Hello World!</h1>");
  //res.write("<p>this is where is paragraph is coming in place<p>");
  //res.send();
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req) {
  const name = req.body.city;
  console.log(name);
});

app.get("/about", function (req, res) {
  res.send("this is the about page in the website");
});

app.get("/contact", function (req, res) {
  res.write("<h1>this is the contact page in the website</h1>");
  res.write("<p>this is a paragraph that has to be here later </p>");
  res.write("<h2>contact me at:<br> +15109009287</h2>");
  res.send();
});
// use app.listen method for port
app.listen(port, () => console.log(`Server running on ${port}`));
