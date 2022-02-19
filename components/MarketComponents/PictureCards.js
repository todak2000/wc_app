import React from 'react'
import {ImageBackground, StyleSheet, Text, View } from 'react-native'


const PictureCards = (props) => {
    const {section,backgroundColor,source}=props
    // const backgroundColor = 'rgba(255, 8, 191, 0.38)'
    // const section = "The Market Place"
    


    
    return (
        <ImageBackground source={source} resizeMode='cover' imageStyle={{borderRadius:10}} style={styles.image}>
        <View style={[styles.container, {backgroundColor}]}>
            <Text style={styles.section}>{section}</Text>
        </View>
        </ImageBackground>
    )
}

export default PictureCards
const styles= StyleSheet.create({
  
    container: {
        width:"100%",
        borderRadius: 10,
        shadowColor: '#E3DACC',
        shadowOffset: {width: -1, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        padding:"5%",
        flexDirection:'column',
        alignContent:"center",
        justifyContent:"center",
        height: 138,
       
      },
      section:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 22,
        lineHeight: 24,
        width: 150,
        height: 48,
        color: "#ffffff",
      },
      image: {
        width: 259,
        height: 138,
        marginRight:15,
      },

})