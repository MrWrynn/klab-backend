const express = require("express");
const chalk = require("chalk");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Mini SNS!");
});
app.get("/write", (req, res) => {
  res.send("Write a new post here.");
});
app.get("/posts", (req, res) => {
  res.send("Here are the posts.");
});

app.listen(port, () => {
  console.log(chalk.bgHex("#ff69b4").white.bold(" EXPRESS SERVER STARTED "));
  console.log(
    chalk.green("Running at: ") + chalk.cyan("http://localhost:" + port)
  );
  console.log(chalk.gray("Press Ctrl+C to stop the server."));
});
