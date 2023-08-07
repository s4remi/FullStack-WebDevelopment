//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
console.log("we are Here!");
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const pass = "ILoveProgramming";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({ extended: true }));

function logger(req, res, next) {
  const password = req.body.password;
  console.log(`the pass that was imported was: ${password}`);
  next();
}

app.use(logger);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", function (req, res) {
  if (req.body.password != pass) {
    //res.status(201).json({ message: "Invalid Password" });
    //or using redirect
    //return res.sendFile(__dirname + "/public/index.html");
    return res.redirect("/");
  } else {
    res.sendFile(__dirname + "/public/secret.html");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
