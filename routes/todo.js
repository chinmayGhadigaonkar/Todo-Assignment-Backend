import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controller/todo.js";

const todoRoute = Router();


todoRoute.get("/gettodos", getTodos);
todoRoute.post("/createTodo", createTodo);
todoRoute.put("/markDone/:id", updateTodo);
todoRoute.delete("/deleteTodo/:id", deleteTodo);



export default todoRoute;