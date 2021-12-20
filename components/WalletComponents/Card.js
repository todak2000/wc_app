import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

 function Card(props){

   const {balance, textOne, textTwo} = props
    return (
        <View style={styles.container}>
            <View style={styles.flexyRight}>
                <Text style={styles.textOne}>{textOne}</Text>
            </View>
            <View style={styles.flexyleft}>
                <Text style={styles.textTwo}>{textTwo}</Text>
                <Text style={styles.textBig}>{balance}</Text>
                
            </View>
            
        </View>
        
    )
}
export default Card
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#A16E53",
      borderRadius: 10,
      shadowColor: '#E3DACC',
      shadowOffset: {width: -1, height: 5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
      padding:"5%",
    },
    flexyRight:{
        flexDirection:"row",
        justifyContent:"flex-start",
        marginBottom:30,
    },
    flexyleft:{
        flexDirection:"row",
        justifyContent:"center",
        
    },
    textOne:{
      color:"#fff",
      fontSize: 18,
      fontFamily:'Rubik',
    },
    textTwo:{
        color:"#fff",
        fontSize: 20,
        fontFamily:'Rubik',
      },
      textBig:{
        color:"#fff",
        fontSize: 60,
        fontFamily:'Rubik',
        fontWeight:"bold"
      }
  });