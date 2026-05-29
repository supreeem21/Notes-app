import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import NoteCard from "../components/NoteCard.jsx";
import { Axis3D } from "lucide-react";
import { toast } from "react-hot-toast";
import api from "../lib/axios.js";
import NotesNotFound from "../components/NotesNotFound.jsx";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
      setIsRateLimited(false);
    } catch (error) {
      console.log("Error getting all notes");
      if (error.response.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {
          notes.length === 0 && !isRateLimited && <NotesNotFound/>
        }

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <NoteCard key={index} note={note} setNotes={setNotes}/>
            ))}
          </div>
        )}
      </div>

      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;
