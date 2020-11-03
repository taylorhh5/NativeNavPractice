import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ReviewDetails({ navigation, route }) {
  if (!route.params) <Text>...loading</Text>;
  console.log(route,"ROUTEEEEEE")
  return (
    <View>
      <Text>Review  Screen</Text>
      <Button title="Home page" onPress={() => navigation.navigate("Home Page")} />
      {/* <Button
      title="React Native by Example"
      onPress={() =>
        navigation.navigate("Home Page", { name: "React Native by Example " })
      } */}
    {/* /> */}
      {route.params ? (
        <View style={style.container}>
          <Text> {route.params.item.title}</Text>
          <Text> {route.params.item.body}</Text>
          <Text> Rating:{route.params.item.rating}</Text>
        </View>
      ) : null}
   
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    padding: 24,
  },
});
