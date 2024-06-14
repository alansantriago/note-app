import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';
import DeleteNote from './src/screens/deleteNote';

const PageRenderer = ({
  activePage,
  notes,
  navigate,
  createNote,
  modifyNote,
  removeNote,
}) => {
  switch (activePage) {
    case 'home':
      return <Home noteList={notes} setCurrentPage={navigate} />;
    case 'add':
      return <AddNote setCurrentPage={navigate} addNote={createNote} />;
    case 'edit':
      return <EditNote note={selectedNote} setCurrentPage={navigate} updateNote={modifyNote} />;
    case 'delete':
      return <DeleteNote note={selectedNote} setCurrentPage={navigate} deleteNote={removeNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const createNote = (title, desc) => {
    const newNote = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,
      title,
      desc,
    };
    setNotes([...notes, newNote]);
  };

  const modifyNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const removeNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <PageRenderer
      activePage={activePage}
      notes={notes}
      navigate={setActivePage}
      createNote={createNote}
      modifyNote={modifyNote}
      removeNote={removeNote}
    />
  );
};

export default App;
// Alan Santriago