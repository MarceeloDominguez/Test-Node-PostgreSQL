import express from "express";
import todoRoute from "./routes/todo.routes.js";

const app = express();

app.use(express.json());

app.use("/api/todos", todoRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
});
