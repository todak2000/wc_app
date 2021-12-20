import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

 function ForgotTopComponent(props){
  const {navigation, textHeader} = props;

    return (

        <View style={styles.container}>
          <TouchableOpacity 
              
              onPress={()=>navigation.navigate('SignIn')}
          >
            <Ionicons name="chevron-back-outline" size={25} color="#ffffff" />
            
          </TouchableOpacity>
          <Text style={styles.text}>{textHeader}</Text>
        </View>
        
    )
}
export default ForgotTopComponent
const styles = StyleSheet.create({
    container: {
      marginTop:"15%",
      flexDirection:"row",
      width:"90%",
      paddingTop:40,
      paddingBottom:40,
      justifyContent:"flex-start",
    },
    text:{
      textAlign:"right",
      color:"#fff",
      fontSize: 16,
      fontFamily:'Rubik',
      marginLeft:"30%"
      // fontWeight:"bold",
    }
  });