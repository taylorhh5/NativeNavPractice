import React from 'react'
import { View, Text,Button } from 'react-native'

export default function ReviewDetails({navigation, route}) {
    return (
        <View>
          <Text>Review Details Screen</Text>
          <Button title="Home page" onPress={() => navigation.push("Home")} />
          {/* <Text> {route.params.item.title}</Text> */}
          {route.params ? <Text> {route.params.item.title}</Text> : null}
    
          {/* {route.params ? <Text>{item.title}</Text> : null} */}
        </View>
      );
}
