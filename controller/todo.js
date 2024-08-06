import Todo from "../models/todo.js";
import { ErrorHandler } from "../utils/utility.js";



const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ success: true, todos });
    } catch (error) {
        next(new ErrorHandler(error));
    }
}


const createTodo = async (req, res, next) => {
    try {
        const { title, description } = req.body;


        if (!title || !description) {
            return next(
              new ErrorHandler("Title and description are required", 400)
            );
        }

        const todo = await Todo.create({title, description});
        

        res.status(201).json({success:true, todo , message:"Todo created successfully"});

    }
    catch (error) {
        next(new ErrorHandler(error));
    }

}


const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findById(id);

        if (!todo) {
            return next(new ErrorHandler("Todo not found", 404));
        }

        todo.completed = true;
        
        await todo.save();
        // other way to update
        // const updatedTodo = await Todo.findByIdAndUpdate(id, {completed: true}, {new: true});

        res.status(200).json({ success: true, todo, message: "Todo Done "});
        

    }

    catch (error) {
        next(new ErrorHandler(error));
    }
}


const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findById(id);
        
        if (!todo) {
            return next(new ErrorHandler("Todo not found", 404));
            
        }

        const deletedTodo = await Todo.findByIdAndDelete(id);


        res.status(200).json({ success: true, message: "Todo deleted" , todo: deletedTodo});

    }
    catch (error) {
        next(new ErrorHandler(error));
    }

}





export { getTodos, createTodo,updateTodo, deleteTodo }