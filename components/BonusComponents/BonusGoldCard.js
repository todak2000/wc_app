import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import DailySVG from './DailySVG'
 function BonusGoldCard(props){

   const {textOne, textHeader} = props
    return (
        <View style={styles.container}>
            <View style={styles.flexyLeft}>
              <DailySVG />
            </View>
            
            <View style={styles.flexyRight}>
                <Text style={styles.textTwo}>{textHeader}</Text>
                <Text style={styles.textOne}>{textOne}</Text>  
            </View>  
        </View>
        
    )
}
export default BonusGoldCard
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#FFEFD3",
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
      color:"#B48A3E",
      fontSize: 12,
      fontFamily:'Rubik',
      width:"100%",
    },
    textTwo:{
        color:"#B48A3E",
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