import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function firstPage({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Second Page')}>
        <Text>first Page</Text>
      </TouchableOpacity>
    </View>
  );
}

function secondPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>second Page</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Page" component={firstPage} />
        <Stack.Screen name="Second Page" component={secondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
