const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Shadowsocks server is running!");
});

const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
console.log("Server config loaded:", config);

app.listen(3000, () => {
  console.log("Web interface listening on port 3000");
});