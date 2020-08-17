import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../Header";
const NavTool = createStackNavigator();

const HomeStack = createStackNavigator();

export default function Navigations() {
  return (
    <HomeStack.Navigator>
     
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerTitle: () => <Header title="HOME" />,
        })}
      />
    
    </HomeStack.Navigator>
  );
}
