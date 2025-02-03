import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const db = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

const app = express();
const port = 3000;

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query(
      `select * from users where email = '${email}'`
    );
    if (result.rows.length > 0) {
      res.send("User already exists");
      return;
    }
    db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
      email,
      password,
    ]);
    res.render("secrets.ejs");
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log(email, password);
  try {
    const result = await db.query(
      `select * from users where email = '${email}'`
    );
    if (result.rows.length === 0) {
      res.send("User not found");
    } else {
      if (result.rows.length === 0) {
        res.send("User not found");
      } else {
        if (result.rows[0].password == password) {
          res.render("secrets.ejs");
        } else {
          res.send("Incorrect password");
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
