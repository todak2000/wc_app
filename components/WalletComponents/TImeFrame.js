import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const TImeFrame = (props) => {
    const{day}=props
    return (
        <View>
            <Text style={Styles.day}>{day}</Text>
        </View>
    )
}

export default TImeFrame
const Styles= StyleSheet.create({
        day:{
            fontSize:14,
            margin: 3,
            fontFamily:"Rubik",
            // backgroundColor:"#ffffff", 
        },
})