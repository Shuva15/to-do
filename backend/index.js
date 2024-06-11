const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/task")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.post("/task", async (req, res) => {

  const { task } = req.body;
  await User.create({
    task,
  });
  const todo = await User.find();
  res.json(todo);
});

app.listen(3001, () => {
  console.log("Servver is running on");
});
