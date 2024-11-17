//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const path = dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  if (req.body.password === 'ILoveProgramming') {
    res.sendFile(path + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});
