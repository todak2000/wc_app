import React from 'react'
import { StyleSheet, TouchableOpacity, Text} from 'react-native'

 function Button(props){

   const {buttonText, navText, onPress} = props
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
    >
        <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
        
    )
}
export default Button
const styles = StyleSheet.create({
    container: {
      marginTop:15,
      paddingLeft:30,
      paddingRight:30,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:10,
      backgroundColor:"#fff",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
    },
    text:{
      color:"#4F9A51",
      fontSize: 16,

      fontFamily:'Rubik',
      fontWeight:"bold",
    }
  });