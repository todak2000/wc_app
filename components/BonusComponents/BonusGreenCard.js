import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import AddSVG from './AddSVG'
 function BonusGreenCard(props){

   const {textOne, textHeader} = props
    return (
        <View style={styles.container}>
            <View style={styles.flexyLeft}>
              <AddSVG />
            </View>
            
            <View style={styles.flexyRight}>
                <Text style={styles.textTwo}>{textHeader}</Text>
                <Text style={styles.textOne}>{textOne}</Text>  
            </View>  
        </View>
        
    )
}
export default BonusGreenCard
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#D2FFCB",
      borderRadius: 10,
      flexDirection:"row",
    },
    flexyLeft:{
        flexDirection:"row",
        justifyContent:"center",
        width:"30%",

    },
    flexyRight:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"65%",
        paddingLeft:"5%",
        
    },
    textOne:{
      color:"#4F9A51",
      fontSize: 12,
      fontFamily:'Rubik',
      width:"100%",
    },
    textTwo:{
        color:"#4F9A51",
        fontSize: 20,
        width:"100%",
        textAlign:"left",
        fontFamily:'Rubik',
        fontWeight:"700",
      },
      textBig:{
        color:"#fff",
        fontSize: 60,
        fontFamily:'Rubik',
        fontWeight:"bold"
      }
  });