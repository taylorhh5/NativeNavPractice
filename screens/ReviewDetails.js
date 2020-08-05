import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ReviewDetails({ navigation, route }) {

  if (!route.params) <Text>...loading</Text>;
  return (
    <View>
      <Text>Review Details Screen</Text>
      <Button title="Home page" onPress={() => navigation.push("Home Page")} />
      {/* {route.params ? <Text> {route.params.item.title}</Text>      
 : null} */}
 <View style={style.container}>
      <Text> {route.params.item.title}</Text>
      <Text> {route.params.item.body}</Text>
      <Text> Rating: {route.params.item.rating}</Text>
      </View>
      {/* <View style={container}>
    <Text style={text}>React Native</Text>
  </View> */}
    </View>
  );
}

const style=StyleSheet.create({
container:{

    backgroundColor:"lightgray",
    padding:24,
   
}
});
