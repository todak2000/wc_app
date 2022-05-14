import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TransHead = () => {
    return (
        <View style={styles.container}>
            <Text style={styles. word}>Transactions history</Text>
            <View style={styles. line}></View>
        </View>
    )
}

export default TransHead
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor: "transparent",
      borderRadius: 3,
      shadowRadius: 1,
      padding:"5%",
      paddingLeft:"0%",
      flexDirection:"row",
      marginTop:5,
      justifyContent:"space-between",
      alignItems: "center",
    },

    word:{
        color:"#000000",
        fontSize: 18,
        fontFamily:"Rubik",
        fontWeight: "bold",
        marginRight: 10,
        marginLeft:0,
        paddingLeft:0,
      },
     
    line:{
        backgroundColor: "rgba(79, 154, 81, 1)",
        height: 2,
        width: "53%",
    },
  });
