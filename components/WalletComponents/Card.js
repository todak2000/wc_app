import React from 'react'
import { ImageBackground, StyleSheet, View, Text} from 'react-native'
import Convert from '../SVGComponents/Convert'
import ShopCoin from '../SVGComponents/ShopCoin'



 function Card(props){

   const {balance, textOne, textTwo, recycleCount} = props
    return (
           <View style={styles.container}>
    
           <View style={styles.containerOne}>
            <Text style={styles.wallet}>wallet</Text>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.flexyRight}>
                <Text style={styles.textOne}>{textOne}</Text>
            </View>
            <View style={styles.flexyleft}>
                {/* <Text style={styles.textTwo}>{textTwo}</Text> */}
                <Text style={styles.textBig}>{balance}</Text>
            </View>
            <View style={styles.childContainer}>
                {/* <View style={styles.childLeft} >
                   <ShopCoin/>
                    <Text style={styles.childWord}>
                      Shop:<Text style={styles.childShop}>12 </Text>
                    </Text>
                </View> */}
                <View style={styles.childRight}>
                    <Convert/>
                    <Text style={styles.childWord}>
                    <Text style={styles.childConv}>{recycleCount}</Text>
                    </Text>
                </View>
            </View>
            </View>
         </View>
      
        
    )
}
export default Card
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"rgba(155, 84, 33, 0.81)",
      borderRadius: 10,
      shadowColor: '#E3DACC',
      shadowOffset: {width: -1, height: 5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
      padding:"5%",
      flexDirection:'column',
    },


    containerOne:{
      flexDirection: "row",
      justifyContent: "flex-end",
      width: '100%',
    },

    containerTwo:{
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      padding: 10,
    },



    flexyRight:{
        flexDirection:"row",
        justifyContent:"flex-start",
        marginBottom:1,
    },
    flexyleft:{
        flexDirection:"row",
        justifyContent:"flex-start",
        
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
      },

      childContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },

      childLeft:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },

      childRight:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft:5,
      },
      childWord:{
        color: '#ffffff',
        marginLeft: 5,
        fontFamily: 'Rubik',
      },

      wallet:{
        color:"#ffffff",
      }

      // image: {
      //   width: "100%",
      //   opacity:100,
      // },

  });