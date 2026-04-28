const express = require("express"); // commonjs
const router = express.Router(); // create a router

// Khai báo route cho đường dẫn gốc "/"
router.get("/", (req, res) => {
  res.send("Hello World! hehe");
});

router.get("/abc", (req, res) => {
  res.send("Check ABC");
});

router.get("/hoidanit", (req, res) => {
  //res.send("<h1>Hỏi Đáp IT</h1>");
  res.render("sample.ejs");
});

module.exports = router; // export the router
