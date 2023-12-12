import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomizedButton from './src/components/button';
import { useState } from 'react';

export default function App() {
  const [name,setName]= useState('Seif');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {name}</Text>
      <CustomizedButton title='Hello!' onPress={(event)=>setName('Hello Again')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
