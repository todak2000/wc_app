import React from 'react'
import { StyleSheet,View, Text} from 'react-native'
import DiscountTrans from '../SVGComponents/DiscountTrans'
import MoneyStar from '../SVGComponents/MoneyStar'
import Youtubetrans from '../SVGComponents/Youtubetrans'



const TransCard = (props) => {
    const{ imageUri,textDate, textWord, textCoin, index, tx_type}= props


    return (
        <View style={styles.container} >
            <View style={styles.leftPart}>
            {textWord.includes("discount")? <DiscountTrans/> : textWord.includes("youtube")? <Youtubetrans/> : <MoneyStar/> } 

                <View style={styles.divi}>
                  <Text  style={styles.textWord}>{textDate}</Text>
                  <Text  style={styles.textWord}>{textWord}</Text>
                </View>
            </View>
            <View style={styles.rightPart}> 
                {tx_type =="Credit"?
                <Text style={styles.textCoinGreen}>+WC {textCoin}</Text>
                :
                <Text style={styles.textCoinRed}>-WC {textCoin}</Text>
                }

            </View>
        </View>
    )
}

export default TransCard
const styles = StyleSheet.create({
    container: {
      width:"100%",
      borderRadius: 3,
      shadowRadius: 1,
      padding:"5%",
      flexDirection:"row",
      marginTop: 0.5,
      justifyContent:"space-between",
      borderBottomWidth: 0.5,
      borderColor:"rgba(153, 255, 156, 1)",

    },
    divi:{
      width:"90%",
    },

    leftPart: {
        width:"68%",
        backgroundColor:"transparent",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
      },


    rightPart: {
        width:"40%",
        backgroundColor:"transparent",
        flexDirection:"row",
        justifyContent:"center",
        textAlign: "center",
        alignItems:"center",
      },


    textWord:{
        fontFamily:'Rubik',
        color:"#000000",
        fontSize: 13,
        fontFamily:"Rubik",
        // fontWeight: "bold",
        marginLeft:10,
        width: "90%",
      },
     
    textCoinRed:{
        fontFamily:'Rubik',
        color: "#FF4900",
        fontSize:14,
        // fontWeight: "bold",
    },

    textCoinGreen:{
      fontFamily:'Rubik',
      color: "#146209",
      fontSize:14,
      // fontWeight: "bold",
  },
    // textDate:{
    //     fontFamily:'Rubik',
    //     color: "#000000",
    //     fontSize:10,
    //     fontWeight: "bold",
    // }


  });