import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(bodyParser.json());

const posts = [];
let currentDate;

app.get("/", (req, res) => {
  if (!currentDate) {
    currentDate = new Date().toLocaleString();
  }
  res.render("index.ejs", { posts: posts, currentDate: currentDate });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;

  const newPost = {
    title: title,
    content: content,
    date: new Date().toLocaleString(),
  };

  posts.push(newPost);

  res.redirect("/");
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  posts[id].title = title;
  posts[id].content = content;

  res.sendStatus(200);
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  posts.splice(id, 1);

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
