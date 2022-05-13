import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ConverHistory = (props) => {
    const{text, symbol}=props
    return (
        <View style={styles.container} >
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.symbol} >{symbol}</Text>
        </View>
    )
}

export default ConverHistory
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#4F9A51",
      borderRadius: 3,
      shadowRadius: 1,
      padding:"3%",
      flexDirection:"row",
      marginTop:10,
      justifyContent:"space-between",
    },
    text:{
        color:"#ffffff",
        fontSize: 14,
        fontFamily:'Rubik300',
        fontWeight: 'bold',
        marginLeft:10,
      },
   

  });