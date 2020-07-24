import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
// import {globalStyles} from '../styles/global'


export default function About(props) {
    return (
        <View>
            <Text>About Screen</Text>
                  <Button title="Home page" onPress={() => props.navigation.push("Home")} />

        </View>
    )
}

// const styles=StyleSheet.create({
// container:{
//     padding:24,
// }
// });
