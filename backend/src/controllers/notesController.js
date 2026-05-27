import Note from "../models/Note.js";

// get all notes controller
export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt: -1});
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// create new note controller
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();

    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    console.log("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update a note controller
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({message: "Note updated successfully"});
  } catch (error) {
    console.log("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete a note controller
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({message: "Note deleted successfully"});
  } catch (error) {
    console.log("Error in deleteNode controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
