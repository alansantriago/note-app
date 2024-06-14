import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/customButton';

const DeleteNote = ({ note, deleteNote, setCurrentPage }) => {
  const handleDelete = () => {
    Alert.alert(
      'Hapus Catatan',
      'Apakah Anda yakin ingin menghapus catatan ini?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            deleteNote(note.id);
            setCurrentPage('home');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hapus Catatan</Text>
      <Text style={styles.desc}>{note.title}</Text>
      <Text style={styles.desc}>{note.desc}</Text>
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={16}
        width="50%"
        onPress={handleDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desc: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DeleteNote;
// Alan Santriago