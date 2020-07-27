import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import {globalStyles} from '../styles/global'

export default function About({ navigation, route }) {
  //   const { item } = route.params;
  console.log(route, "route in about");

  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Home page" onPress={() => navigation.push("Home")} />
      {/* <Text> {route.params.item.title}</Text> */}
      {route.params ? <Text> {route.params.item.title}</Text> : null}

      {/* {route.params ? <Text>{item.title}</Text> : null} */}
    </View>
  );
}

// const styles=StyleSheet.create({
// container:{
//     padding:24,
// }
// });
