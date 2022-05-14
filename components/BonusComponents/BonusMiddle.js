import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import FriendSVG from './FriendSVG'
 function BonusMiddle(props){
   const {navigation, textOne} = props
    return (
        <View style={styles.container}>
            <View style={styles.inCont}>
                <FriendSVG />
                <Text style={styles.inText}>{textOne}</Text>
            </View>
            <TouchableOpacity onPress={navigation} style={styles.navi}><Ionicons name="chevron-forward" size={23} color="#fff" /></TouchableOpacity>
        </View>
        
    )
}
export default BonusMiddle
const styles = StyleSheet.create({
    container: {
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginTop:10,
      borderRadius:10,
      backgroundColor:"#F0CA88"
    },
    inCont:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:"85%",
    },
    inText:{
        fontSize:14,
        width:"75%",
        color:"#fff",
        marginVertical:20,
        fontFamily:'Rubik',
    },

    navi:{
        marginRight:20,
        // backgroundColor:"#00f",
    }
  });