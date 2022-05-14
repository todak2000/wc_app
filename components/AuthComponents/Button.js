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
      width:"100%",
      marginTop:15,
      height:46,
      backgroundColor:"#4F9A51",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
    },
    text:{
      color:"#fff",
      fontSize: 16,
      fontFamily:'Rubik',
      fontWeight:"bold",
    }
  });