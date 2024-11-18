import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const path = dirname(fileURLToPath(import.meta.url));

const d = new Date();
let day = d.getDay();
let line = "";

if (day === 0 || day === 6) {
  line = "Hey! It's the Weekend, It's time to have fun";
} else {
  line = "Hey! It's a working day, Get back to work";
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.render(path + "/view/index.ejs", {
    sentence: line,
  });
});
