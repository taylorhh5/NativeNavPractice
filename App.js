import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails.js";

const NavTool = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavTool.Navigator>
        <NavTool.Screen name="Home Page" component={Home} />

        <NavTool.Screen name="About" component={About} />
        <NavTool.Screen name="Review" component={ReviewDetails} />
      </NavTool.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
