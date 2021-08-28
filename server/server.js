const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const connection = require("./db");
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", (req, res) => {
  res.send("list of all task");
});

app.post("/addTask", (req, res) => {
  const ADD_QUERY = `insert into todotaskmanager.tasks (task) values('${req.body.task}')`;
  console.log(req.body.task);
  connection.query(ADD_QUERY, (err) => {
    if (err) console.log(err);
    else res.send("task has been added");
  });
  res.send("You can add Task");
});

app.get("/deleteTask", (req, res) => {
  res.send("deleted task");
});

app.listen(4000, () => {
  console.log("running on port 4000");
});
