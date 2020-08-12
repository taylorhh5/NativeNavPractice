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
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "Description 3",
      key: 3,
    },
  ]);
  return (
    <View style={style.container}>
      <Button
        title="About"
        onPress={() => props.navigation.navigate("About")}
      />

      <FlatList
        style={style.listContainer}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate({ name: "Review", params: { item } })
            }
          >
            <Text style={style.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
  },
  listContainer: {
    alignSelf: "center",
    marginTop: 15,
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    marginTop:8,
    color:"blue",
  }
});
