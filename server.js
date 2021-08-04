const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Application up and running");
});

app.listen(5000, () => {
  console.log("Listening")
});
