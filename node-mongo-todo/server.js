const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { TodoModel } = require("./TodoModel");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  TodoModel.find({})
    .then((todoList) => res.status(200).json(todoList))
    .catch((err) => res.status(400).json(err));
});

app.post("/todo", (req, res) => {
  const newTodo = new TodoModel({
    ...req.body,
    created_at: new Date(),
  });

  newTodo
    .save()
    .then((savedTodo) => res.status(200).json(savedTodo))
    .catch((err) => res.status(400).json(err));
});

app.listen(PORT, async () => {
  console.log(`Server is running... ${PORT}`);
  await mongoose.connect("mongodb://mongo-alias:27017/todos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB...");
});
