import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import {FontAwesome5, Ionicons} from '@expo/vector-icons'

 function FollowerItem(props){

   const {imgUrl, name, coins} = props
    return (
        <View style={styles.container}>
            <View style={styles.flexy}>
              {imgUrl ?
              <Text >{imgUrl}</Text>
              :
              <Ionicons name="person-circle-sharp" size={50} color="#fff" />
            }
              <Text style={styles.nameText}>{name}</Text>
            </View>
            <Text style={styles.coinText}>{coins}</Text>
            
        </View>
        
    )
}
export default FollowerItem
const styles = StyleSheet.create({
    container: {
      width:"100%",
      paddingTop:"1%",
      paddingBottom:"1%",
      flexDirection:"row",
      alignContent:"center",
      alignItems:"center",
      justifyContent:"space-between"
    },
    coinText:{
      color:"#fff",
      fontFamily:"Rubik300",
      fontSize:17,
      
    },
    nameText:{
      color:"#fff",
      fontFamily:"Rubik",
      marginLeft:10,
    },
    flexy:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      
    }

    
  });