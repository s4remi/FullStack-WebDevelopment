import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "public");
const otherIndexesPath = path.join(__dirname, "other indexes");

const app = express();
const port = 3001;

console.log("we are here!");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  console.log(__dirname);
  //res.sendFile(__dirname + "/public/index.html");
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
