import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native'; 

const EditNote = ({ note, setCurrentPage, updateNote }) => {
  const [title, setTitle] = useState(note.title); 
  const [desc, setDesc] = useState(note.desc); 

  const handleEdit = () => {
    const updatedNote = { ...note, title, desc };
    updateNote(updatedNote);
    setCurrentPage('home'); 
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={{ fontSize: 20, marginVertical: 10 }}
      />
      <TextInput
        value={desc}
        onChangeText={setDesc}
        placeholder="Description"
        multiline={true}
        style={{ height: 100, borderWidth: 1, padding: 5 }}
      />
      <Button title="Save Changes" onPress={handleEdit} />
    </View>
  );
};

export default EditNote;
// Alan Santriago