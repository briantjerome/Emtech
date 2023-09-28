import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NameInputScreen from './NameInputScreen'; // Import the new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExpiTrack">
        <Stack.Screen name="ExpiTrack" component={HomeScreen} />
        <Stack.Screen name="Category" component={NameInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const [nameList, setNameList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addNameToList = (name) => {
    setNameList([...nameList, name]);
  };

  const filteredNameList = nameList.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textAbove}>Categories</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="🔍 SEARCH"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <View style={styles.nameList}>
        {filteredNameList.map((name, index) => (
          <View
            key={index}
            style={[
              styles.nameBox,
              index % 2 === 0 ? styles.leftNameBox : styles.rightNameBox,
            ]}
          >
            <Text>{name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="➕"
          onPress={() => {
            navigation.navigate('Category', { addNameToList });
          }}
          color="violet"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 16,
    backgroundColor: '#f6f5f5',
  },
  textAbove: {
    textAlign: 'center',
    color: '#2d0c57',
    fontSize: 45,
    fontWeight: 'thin',
    fontFamily: 'helvetica',
    position: 'absolute',
    top: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderColor: '#d4bfb0',
    alignContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    color: '#9586A8',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    marginRight: 15,
    padding: 5,
    width: 350,
    borderRadius: 27,
    backgroundColor: 'white',
  },
  nameList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
  },
  nameBox: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 40,
    width: '48%',
    marginVertical: 10,
    borderRadius: 20,
    marginRight: 5,
  },
  leftNameBox: {
    alignSelf: 'flex-start',
  },
  rightNameBox: {
    alignSelf: 'flex-end',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
  },
});
