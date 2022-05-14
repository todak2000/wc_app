import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'

 function BonusCardDone(props){
   const {navigation, value} = props
    return (
        <View style={styles.container}>
            <Ionicons name="checkmark-done-circle" size={40} color="#1D1D1D50" />
            <Text style={styles.add}>Coins earned for the day!</Text>
        </View>
        
    )
}
export default BonusCardDone
const styles = StyleSheet.create({
    container: {
      width:"32%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%",
      borderRadius:10,
      margin:"5%",
      backgroundColor:"#FFEFD3",
    },

    add:{
        fontSize:9,
        color:"#4B4B4B",
        fontFamily:'Rubik',
        textAlign:"center",
        marginTop:10,
    },
  });