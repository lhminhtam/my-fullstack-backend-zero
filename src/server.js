require("dotenv").config(); // load .env file
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine.js"); // commonjs
const webRoutes = require("./routes/web.js"); // commonjs

const app = express(); // create an express application
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME || "localhost"; //hostname

//config template engine and static files
configViewEngine(app);

//use the web routes
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening at ${port}`);
});
