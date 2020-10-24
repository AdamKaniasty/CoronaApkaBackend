import { StatusBar } from "expo-status-bar";
import React, { useEffect, Component } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import  firebaseConfig from "./config";
import firebase from "firebase";
// import firestore from '@react-native-firebase/firestore';
let data=0
class App extends Component {
  constructor() {
    super();
    
  }
  render() {

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }
    firebase.database().ref('dataDzis/').on('value', function (snapshot) { 
      data=snapshot.val()
      console.log(data);});
      
    return (
      <View style={styles.container}>
        <Text>{data.śląskie.id}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
