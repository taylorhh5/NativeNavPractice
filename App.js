import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails.js";
import Navigations from './routes/Navigations'
import AboutNavigation from './routes/AboutNavigator'

const NavTool = createStackNavigator();

const Drawer = createDrawerNavigator();

//Navigation Conatiner > Drawer Navigation > Drawer Screen
//Whichever Drawer.Screen Component first is home page
//Home Page and About components actually coming from homestack navigatior in routes folder. This gives these pages homestack hamburger
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
         screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6D00',
          },
          headerTintColor: '#ffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}>

        <Drawer.Screen  name="Home Page" component={Navigations} />

              <Drawer.Screen  name="About" component={About} />

        <Drawer.Screen name="Review" component={ReviewDetails} />
      </Drawer.Navigator>
     
    </NavigationContainer>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
