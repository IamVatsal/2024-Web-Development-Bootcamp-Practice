import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(req.rawHeaders);
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  // console.log(req.rawHeaders);
  res.send("<h2>vaxxxxxxxxxxxxxx.com</h2>");
});

app.get("/about", (req, res) => {
  // console.log(req.rawHeaders);
  res.send("<h1>You have Found the About Page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
