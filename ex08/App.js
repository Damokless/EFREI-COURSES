import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function firstPage({navigation}) {
  const [input, setInput] = useState('')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={styles.input} onChangeText={text => setInput(text)}></TextInput>
      <TouchableOpacity style={{borderWidth: 1, borderRadius: 12, padding: 10, margin:8}} onPress={() => navigation.navigate('Second Page', {paramText: input})}>
        <Text>next page</Text>
      </TouchableOpacity>
    </View>
  );
}

function secondPage({ route, navigation }) {
  const textFromFirstPage = route.params.paramText
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{textFromFirstPage}</Text>
      <TouchableOpacity style={{borderWidth: 1, borderRadius: 12, padding: 10, margin:8}} onPress={() => navigation.goBack()}>
        <Text style={{margin:10}}>previous page</Text>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '50%',
    marginTop: 24,
    borderBottomWidth: 1,
    padding: 10,
    margin: 10
  },
});