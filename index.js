import express from "express";
import dotenv from "dotenv";
import connectionDB from "./utils/connection.js";
import todoRoute from "./routes/todo.js";
import { errorMiddleware } from "./middleware/errormiddleware.js";
import cors from "cors";
const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();


const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://todo-assignment-front-end.vercel.app/",
    "*",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));




// connect to MongoDB
connectionDB();

app.get("/", (req, res) => {
    res.send("Hello World");
}
)
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api/todo", todoRoute);
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
