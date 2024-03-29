import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Spend from '../SVGComponents/Spend'
import Claim from '../SVGComponents/Claim'
 function Greencard(props){

   const {balance, textOne, textTwo, onPress} = props
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {textOne === "Spend" ?<Spend />: <Claim />}
            <View style={styles.flexyLeft}>
                <Text style={styles.textOne}>{textOne}</Text>
                <Text style={styles.textTwo}>{textTwo}</Text>
            </View>

            
        </TouchableOpacity>
        
    )
}
export default Greencard
const styles = StyleSheet.create({
    container: {
      width:"49%",
      backgroundColor:"#CFFFC7",
      borderRadius: 3,
      shadowRadius: 1,
      padding:"2%",
      flexDirection:"row",
      marginTop:20,
      justifyContent:"flex-start",
    },
    flexyLeft:{
        flexDirection:"column",
    },

    textOne:{
      color:"#4F9A51",
      fontSize: 13,
      fontFamily:'Rubik',
      marginLeft:10,
    },
    textTwo:{
        color:"#4F9A51",
        fontSize: 8,
        fontFamily:'Rubik',
        width:"70%",
        marginLeft:10,
      },

  });