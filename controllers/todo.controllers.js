import { todoModel } from "../models/todo.models.js";

const getAll = async (req, res) => {
  try {
    const { rows } = await todoModel.findAll();
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const { title } = req.body;
    const response = await todoModel.create(title);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await todoModel.deleteTodo(id);

    if (response) {
      res.json({ message: "Tarea eliminada" });
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const response = await todoModel.updateTodo(id, title);

    if (response) {
      res.json({ message: "Tarea actualizada" });
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const todoController = {
  getAll,
  create,
  deleteTodo,
  update,
};
