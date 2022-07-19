import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

 function ProfileInput(props){

   const {tag, value} = props
    return (
        <View style={styles.container}>
            <Text style={styles.textTag}>{tag}</Text>
            <View style={styles.valueDiv}>
                <Text style={styles.textValue}>{value}</Text>
            </View>
            
        </View>
        
    )
}
export default ProfileInput
const styles = StyleSheet.create({
    container: {
      width:"100%",
      paddingLeft:"5%",
      paddingRight:"5%",
      flexDirection:"column",
      marginTop:30,
    },

    valueDiv:{
        marginTop:3,
        width:"100%",
        padding:"3%",
        paddingLeft:"7%",
        backgroundColor:"#EFFFEC"
        // marginBottom:30,
    },
    textValue:{
      color:"#606060",
      fontSize: 13,
      fontFamily:'Rubik',
    },
    textTag:{
        color:"#606060",
        fontSize: 15,
        fontWeight:"bold",
        fontFamily:'Rubik',
      },
  });