import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Home({navigation}) {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#aef',
  },
});
