import React from 'react'
import { StyleSheet,View, Text} from 'react-native'
import DiscountTrans from '../SVGComponents/DiscountTrans'
import MoneyStar from '../SVGComponents/MoneyStar'
import Youtubetrans from '../SVGComponents/Youtubetrans'



const TransCard = (props) => {
    const{ imageUri, textWord, textCoin}= props


    return (
        <View style={styles.container} >
            <View style={styles.leftPart}>
            {textWord.includes("discount")? <DiscountTrans/> : textWord.includes("youtube")? <Youtubetrans/> : <MoneyStar/> } 

                <Text  style={styles.textWord}>{textWord}</Text>
            </View>
            <View style={styles.rightPart}> 
                <Text style={styles.textCoin}>{textCoin}</Text>
            </View>
        </View>
    )
}

export default TransCard
const styles = StyleSheet.create({
    container: {
      width:"100%",
    //   backgroundColor:"#ffffff",
      borderRadius: 3,
      shadowRadius: 1,
      padding:"5%",
      flexDirection:"row",
      marginTop: 0.5,
      justifyContent:"space-between",
      borderBottomWidth: 0.5,
      borderColor:"rgba(153, 255, 156, 1)",

    },

    leftPart: {
        width:"68%",
        backgroundColor:"transparent",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
      },


    rightPart: {
        width:"17%",
        backgroundColor:"transparent",
        flexDirection:"row",
        justifyContent:"center",
        textAlign: "center",
        alignItems:"center",
      },


    textWord:{
        fontFamily:'Rubik',
        color:"#000000",
        fontSize: 10,
        fontFamily:"Rubik",
        fontWeight: "bold",
        marginLeft:10,
        width: "90%",
      },
     
    textCoin:{
        fontFamily:'Rubik',
        color: "#000000",
        fontSize:10,
        fontWeight: "bold",
        // marginTop: 20,
    },

    // textDate:{
    //     fontFamily:'Rubik',
    //     color: "#000000",
    //     fontSize:10,
    //     fontWeight: "bold",
    // }


  });