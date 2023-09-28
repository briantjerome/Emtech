import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text} from 'react-native';

const NameInputScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSaveName = () => {
    const { addNameToList } = route.params;
    addNameToList(name);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    <Text style={styles.textAbove}>Create a New Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Category"
        onChangeText={handleNameChange}
        value={name}
      />
      <View style={styles.DoneContainer}>
      <Button title="DONE" onPress={handleSaveName} 
       color="#0bce83"
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 120,
  },
  textAbove: {
    position:'absolute',
    top: 10,
    textAlign: 'center',
    color: '#2d0c57',
    fontSize: 40,
    fontWeight: 'thin',
    fontFamily: 'helvetica',
  },
});

export default NameInputScreen;
