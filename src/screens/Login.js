import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  Navigation,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  // Create statehook to save the text input name
  const [name, setName] = useState('');

  // Create function for onclick
  const setData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your name.');
    } else {
      // Use try and catch, use AsyncStorage setItem method to store value inside, first para give string as a key and second is stored value as second key
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/storage.png')} />
      <Text style={styles.text}>Login(Async Storage)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name here"
        onChangeText={val => setName(val)}></TextInput>
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#aef',
  },
  logo: {
    width: 50,
    height: 50,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
