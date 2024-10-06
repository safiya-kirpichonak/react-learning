import React from "react";
import Split from "react-split";
import { nanoid } from "nanoid";

import "./style.css";
// import { data } from "./data.js";

import Editor from "./components/Editor.js";
import Sidebar from "./components/Sidebar.js";

export default function App() {
  const notesLocalStorage = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, setNotes] = React.useState(notesLocalStorage);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((oldNote) => oldNote.id !== noteId));
  }

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const updatedNotes = [];
      for (const oldNote of oldNotes) {
        if (oldNote.id === currentNoteId) {
          updatedNotes.unshift({
            ...oldNote,
            body: text,
          });
        } else {
          updatedNotes.push(oldNote);
        }
      }
      return updatedNotes;
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
