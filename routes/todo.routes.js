import { Router } from "express";
import { todoController } from "../controllers/todo.controllers.js";

const router = Router();

router.get("/", todoController.getAll);
router.post("/", todoController.create);
router.delete("/:id", todoController.deleteTodo);
router.put("/:id", todoController.update);

export default router;
