import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text id="liczba">Open up App.js to start working on your app!</Text>
      <Button title="1" onPress={() => Alert.alert('1')}/>
      <Button title="2" onPress={() => Alert.alert('2')}/>
      <Button title="3" onPress={() => Alert.alert('3')}/>
      <StatusBar style="auto" />
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
