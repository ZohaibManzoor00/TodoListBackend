const todoRouter = require("express").Router();
const { getAllTodos, createNewTodo, deleteTodo, markCompleted } = require("../controllers/todoController");

todoRouter.get("/", getAllTodos);
todoRouter.post("/", createNewTodo)
todoRouter.delete('/:id', deleteTodo)
todoRouter.put("/:id", markCompleted)

module.exports = todoRouter;
