import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const notesRouter = express.Router();

// get all notes
notesRouter.get("/", getAllNotes)

// create a note
notesRouter.post("/", createNote);

// update a note
notesRouter.put("/:id", updateNote);

// delete a note
notesRouter.delete("/:id", deleteNote);

export default notesRouter