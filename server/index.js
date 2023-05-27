const express = require("express");
const path = require("path");

const html = path.join(__dirname, "../", "public", "index.html")
const public = path.join(__dirname, "../", "public");
const host = "localhost"
const port = process.env.SERVER_PORT || 8080;
const app = express();

// middlewares
app.use(express.json());
app.use(express.static(public));

// routes
app.get("/", (req, res) => res.sendFile(html));

// setup
app.listen(port, () => {
  console.log(`Server @${host}://${port}`);
});