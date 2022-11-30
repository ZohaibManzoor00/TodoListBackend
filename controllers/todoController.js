const TodoModel = require("../models/todoModel");

async function getAllTodos(req, res) {
  try {
    const data = await TodoModel.getAllTodosFromDB();
    return res.status(200).json({
      data,
    });
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
}

async function createNewTodo(req, res) {
  try {
    const description = req.body.description
    const data = await TodoModel.createNewTodoFromDB(description)
    return res.status(200).json({
        data
    })
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
}

async function deleteTodo(req, res) {
    try {
        const ID = req.params.id 
        const data = await TodoModel.deleteTodoFromDB(ID)
        return res.status(200).json({
            ItemDeleted: data 
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

async function markCompleted(req, res) {
    try {
        const ID = req.params.id 
        const data = await TodoModel.markCompletedFromDB(ID)
        return res.status(200).json({
            MarkedComplete: data
        })

    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

module.exports = {
  getAllTodos,
  createNewTodo,
  deleteTodo,
  markCompleted
};
