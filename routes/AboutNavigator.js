import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../Header";
import About from '../screens/About'
const NavTool = createStackNavigator();

const AboutStack = createStackNavigator();


//Navigator surrounds Screen

export default function AboutNavigation() {
  return (
    <AboutStack.Navigator>
     
   
         <AboutStack.Screen
        name="About"
        component={About}
        options={() => ({
            headerTitle: () => <Header title="ABOUT" />,
          })}
      />
    </AboutStack.Navigator>
  );
}
