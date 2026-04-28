const express = require("express"); // commonjs
const router = express.Router(); // create a router
const {
  getHomepage,
  getABC,
  getHoiDanIT,
} = require("../controllers/homeController.js"); // import the controller function

// Khai báo route cho đường dẫn gốc "/"
router.get("/", getHomepage); // sử dụng controller function để xử lý yêu cầu

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);

module.exports = router; // export the router
