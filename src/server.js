require("dotenv").config(); // load .env file
const express = require("express"); // commonjs
const path = require("path"); // commonjs

const app = express(); // create an express application
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || "localhost"; //hostname

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static files
app.use(express.static(path.join(__dirname, "public")));

// Khai báo route cho đường dẫn gốc "/"
app.get("/", (req, res) => {
  res.send("Hello World! hehe");
});

app.get("/abc", (req, res) => {
  res.send("Check ABC");
});

app.get("/hoidanit", (req, res) => {
  //res.send("<h1>Hỏi Đáp IT</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at ${port}`);
});
