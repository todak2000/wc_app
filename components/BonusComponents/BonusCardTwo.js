import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import LockSVG from './LockSVG'
 function BonusCardTwo(props){
   const {navigation, value, count} = props
    return (
        <View style={styles.container}>
            <LockSVG />
            <Text style={styles.add}>{value}</Text>
            {
              10-count ==10 ?
              <Text style={styles.add}>Get Started Already!</Text>
              :
              <Text style={styles.addCircle}>{10-count} more to go</Text>
            }
        </View>
        
    )
}
export default BonusCardTwo
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
      shadowColor: '#171717',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },

    add:{
        fontSize:9,
        color:"#4B4B4B",
        fontFamily:'Rubik',
        textAlign:"center",
        marginTop:10,
    },
    addCircle:{
      fontSize:9,
      color:"#C85929",
      fontFamily:'Rubik',
      textAlign:"center",
      marginTop:10,
      backgroundColor:"#fff",
      padding:5,
  
      marginLeft:-30,
      marginRight:-30,
  },
  });