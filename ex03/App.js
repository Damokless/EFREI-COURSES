import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button title="PRESS TO ADD + 1" onPress={() => setCounter(counter + 1)}/>
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
