import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { useFonts } from "@use-expo/font";

const customFonts = {
  Rubik: require("../../assets/fonts/Rubik.ttf"),
};

 function Header(props){

  const [isLoaded] = useFonts(customFonts);

   const {headerText} = props
    return (

        <View style={styles.container}>
          {
            isLoaded && <Text style={styles.text}>{headerText}</Text>
          }
             
        </View>
        
    )
}
export default Header
const styles = StyleSheet.create({
    container: {
      width:"70%",
      marginTop:15,
    },
    text:{
      textAlign:"left",
      color:"#4F9A51",
      fontSize: 28,
      fontFamily:'Rubik',
      fontWeight:"bold",
    }
  });