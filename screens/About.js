import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function About(props) {


  return (
    <View >
      <Button  title="Home"   onPress={()=> props.navigation.push("Home Page")}/>

      <Text>About Screen</Text>
  
    </View>
  );
}

const styles=StyleSheet.create({
container:{
    padding:24,
}
});
