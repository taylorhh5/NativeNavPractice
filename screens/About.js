import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function About(props) {


  return (
    <View style={style.container}>
      <Button  title="Home"   onPress={()=> props.navigation.navigate("Home Page")}/>

      <Text>About </Text>
      <Button  title="Drawer"   onPress={()=> props.navigation.toggleDrawer()}/>

    </View>
  );
}

const style=StyleSheet.create({
container:{
    padding:24,
}
});
