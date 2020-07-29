import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function Home(props) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: " Descripton 1",
      key: 1,
    },
    {
      title: "Gotta catch Them All(again)",
      rating: 4,
      body: "Description 2",
      key: 2,
    },
    { title: 'Not So "Final" Fantasy', rating: 3, body: "Description 3", key: 3 },
  ]);
  return (
    <View>
<Button  title="About"   onPress={()=> props.navigation.push("About")}/>
          
          
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={()=> props.navigation.navigate({name: 'Review', params: {item}})}>
   
          
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    
      
      {/* <Text>Home Screen</Text> */}
      {/* <Button title="About" onPress={() => props.navigation.push("About")} /> */}
    </View>
  );
}
