import React from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { useFonts } from "@use-expo/font";
import { LinearGradient } from 'expo-linear-gradient';
const customFonts = {
  Rubik: require("../../assets/fonts/Rubik.ttf"),
};

 function LoginTop(props){

  const [isLoaded] = useFonts(customFonts);

   const {headerText, subHeader} = props
    return (

        <LinearGradient
            // Button Linear Gradient
            colors={['#4F9A51', '#39804D']}
            style={styles.container}>
            {
            isLoaded && 
            <View>
                <Text style={styles.text}>{headerText}</Text>
                <Text style={styles.subText}>{subHeader}</Text>
            </View>
          }
        </LinearGradient>
        
    )
}
export default LoginTop
const styles = StyleSheet.create({
    container: {
      width:"100%",
      paddingTop:100,
      paddingBottom:40,
      paddingLeft:20,
      backgroundColor:"#4F9A51",
    },
    text:{
      textAlign:"left",
      color:"#fff",
      fontSize: 25,
      fontFamily:'Rubik',
      fontWeight:"bold",
    },
    subText:{
        textAlign:"left",
        color:"#fff",
        width:"60%",
        fontSize: 17,
        fontFamily:'Rubik',
      }
  });