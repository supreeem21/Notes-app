import express, { json } from "express"
import notesRouter from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use("/api/notes", notesRouter);

connectDB();

app.listen(PORT, ()=> {
    console.log(`Server started on PORT: ${PORT}`)
})