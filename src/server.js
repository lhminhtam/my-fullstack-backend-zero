require("dotenv").config(); // load .env file
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine.js"); // commonjs
const webRoutes = require("./routes/web.js"); // commonjs

const mysql = require("mysql2");

const app = express(); // create an express application
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || "localhost"; //hostname

//config template engine and static files
configViewEngine(app);

//use the web routes
app.use("/", webRoutes);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

//simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(">>>>> Results:", results); // results contains rows returned by server
  console.log(">>>>> Fields:", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at ${port}`);
});
