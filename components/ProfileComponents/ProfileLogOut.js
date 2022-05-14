import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'

 function ProfileLogOut(props){
  const [tog, setTog] = useState(true);
   const {value, onPress} = props
    return (
        <View style={styles.container}>
            <View style={styles.valueDiv}>
                <Text style={styles.textValue}>{value}</Text>
                {value== "Notification" ?
                <TouchableOpacity onPress={()=>{
                  
                  if(tog){
                    setTog(false)
                  }
                  else{
                    setTog(true)
                  }
                }} 
                  >
                  {
                    tog ?
                    <MaterialIcons name="toggle-on" size={40} color="#F7B686" />
                    :
                    <MaterialIcons name="toggle-off" size={40} color="#606060" />
                  }
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPress}><Ionicons name="chevron-forward" size={23} color="#4B4B4B" /></TouchableOpacity>
                }
                
            </View>
            
        </View>
        
    )
}
export default ProfileLogOut
const styles = StyleSheet.create({
    container: {
      width:"100%",
      paddingLeft:"5%",
      paddingRight:"5%",
      flexDirection:"column",
      marginTop:10,
    },

    valueDiv:{
        marginTop:3,
        width:"100%",
        paddingLeft:"7%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    textValue:{
      color:"#606060",
      fontSize: 15,
      fontFamily:'Rubik',
    },
    textTag:{
        color:"#606060",
        fontSize: 18,
        fontWeight:"bold",
        fontFamily:'Rubik',
      },
  });