import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "black", alignItems: 'center', justifyContent: 'center',}}><Text style={{color: "white",}}>Header</Text></View>
      <View style={{ flex: 10, backgroundColor: "#F3F4F6", alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{color: "black"}}>Hello</Text>
        <Image style={styles.img} source={{uri: 'https://media.discordapp.net/attachments/770232297039069184/897841813812043816/SPOILER_Capture_decran_2021-09-21_a_13.26.43.png'}}></Image>
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
  img: {
    width: 500,
    height: 500,
  }
});
