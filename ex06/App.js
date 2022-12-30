import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('')
  const [list, setList] = useState([])
  const [isSelected, setSelection] = useState(false)

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ width:'100%', height:'20%', flexWrap: "nowrap", backgroundColor: "white", alignItems: 'center', justifyContent: 'center'}}>
        <TextInput style={styles.input} onChangeText= {text => setInputText(text)} placeholder="type something" />
        <Button title="add" onPress={() => setList((oldList) => [...oldList, inputText])}/>
      </View>
      <View style={{ flex: 10, backgroundColor: "#F3F4F6", alignItems: 'center', justifyContent: 'center',}}>
      {list.map((text, key)=> {
        return (
          <TouchableOpacity key={key} style={{margin:10}} onPress={setSelection} >
            <Text style={[isSelected ? styles.Selected : styles.notSelected]}>
              {text}
            </Text>
          </TouchableOpacity>
        )
      })}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}><Text style={{color: "black"}}>footer</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    width: '50%',
    marginTop: 24,
    borderWidth: 1,
    padding: 10,
  },

  notSelected: {
    color: "black",
  },
  
  Selected: {
    color: "black",
    textDecorationLine: 'line-through'
  }
});
