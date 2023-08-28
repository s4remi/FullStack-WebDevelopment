import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const name = req.body.fName;
  const surname = req.body.lName;
  console.log(`the first name is ${name} and the last name is ${surname}`);
  let count = name.length + surname.length;
  console.log(`the count is ${count}`);
  // res.write(
  //   `<h1><em><strong>the<strong> count for the word you type is<em> ${count}`
  // );
  res.render("index.ejs", { firstN: name, lastN: surname, co: count });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
