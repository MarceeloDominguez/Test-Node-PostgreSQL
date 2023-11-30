import { pool } from "../database/connection.js";

const findAll = async () => {
  const result = await pool.query("SELECT * FROM todos");
  return result;
};

const create = async (title) => {
  const query = "INSERT INTO todos (title) VALUES ($1) RETURNING *";
  const { rows } = await pool.query(query, [title]);
  return rows[0];
};

const deleteTodo = async (id) => {
  const query = "DELETE FROM todos WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [id]);
  return rows.length > 0;
};

const updateTodo = async (id, title) => {
  const query = "UPDATE todos SET title = $2 WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(query, [id, title]);
  return rows.length > 0;
};

export const todoModel = {
  findAll,
  create,
  deleteTodo,
  updateTodo,
};
