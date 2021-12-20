import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { useFonts } from "@use-expo/font";

const customFonts = {
  Rubik: require("../../assets/fonts/Rubik.ttf"),
};

 function Subheader(props){

  const [isLoaded] = useFonts(customFonts);

   const {subHeaderText} = props
    return (

        <View style={styles.container}>
          {
            isLoaded && <Text style={styles.text}>{subHeaderText}</Text>
          }
             
        </View>
        
    )
}
export default Subheader
const styles = StyleSheet.create({
    container: {
      width:"90%",
      marginTop:5,
    },
    text:{
      textAlign:"left",
      color:"#0F0F0F",
      fontSize: 16,
      fontFamily:'Rubik',
      // fontWeight:"bold",
    }
  });