console.log("Here!");
import express from "express";

const port = 1234;
const app = express();

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em><strong>This is some em text<strong></em>",
  };
  res.render("index.ejs", data);
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
