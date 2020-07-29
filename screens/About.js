import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import {globalStyles} from '../styles/global'

export default function About(props) {
  //   const { item } = route.params;
  // console.log(route, "route in about");

  return (
    <View>
      <Button  title="Review Details"   onPress={()=> props.navigation.push("Review")}/>

      <Text>About Screen</Text>
  
    </View>
  );
}

// const styles=StyleSheet.create({
// container:{
//     padding:24,
// }
// });
