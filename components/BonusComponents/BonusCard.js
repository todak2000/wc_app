import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import CoinSVG from './CoinSVG'
 function BonusCard(props){
   const {navigation, bonusCoin, onPress, type,bonus,url,timer} = props
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <CoinSVG />
            <Text style={styles.bonus}>{bonusCoin} WC</Text>
            <Text style={styles.add}>Claim Now!</Text>
        </TouchableOpacity>
        
    )
}
export default BonusCard
const styles = StyleSheet.create({
    container: {
      width:"32%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%",
      borderRadius:10,
      margin:"5%",
      backgroundColor:"#C85929",
      shadowColor: '#171717',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },


    bonus:{
        color:"#fff",
        fontWeight:"700",
        marginTop:10,
        marginBottom:5,
        fontFamily:'Rubik',
    },
    add:{
        fontSize:10,
        color:"#fff",
        fontFamily:'Rubik',
    },
  });