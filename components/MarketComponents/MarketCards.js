import React from 'react'
import {Text, ImageBackground, StyleSheet, View } from 'react-native'



const MarketCards = (props) => {
    const {titleHeader,titleBody,titleFooter,image,price,}= props
   
 
//   (titleBody.includes("netflix" || "howthorn") ) 

 // var icon = this.props.active
    // ? require('./my-icon-active.png')
    // : require('./my-icon-inactive.png');
    // width: 288,
    // height: 138,


    return (
        <View  style={[styles.cardContainer, {
            width:titleBody.includes("Netflix") || titleBody.includes("Howthorw") || titleBody.includes("gift") || titleBody.includes("Skincare")? 307.3 : 288,
            height:titleBody.includes("Netflix") || titleBody.includes("Howthorw") || titleBody.includes("gift") || titleBody.includes("Skincare")? 140 : 138,
            }]}>
            {/* <View style={styles.leftHalf}> */} 
            <ImageBackground source={image} resizeMode='cover' imageStyle={{ borderBottomLeftRadius:10, borderTopLeftRadius:10,}}style={styles.image}>
            
                <View style={styles.cardBalance}>
                   <Text style={styles.cardPrice}>WC {price}</Text> 
                </View>
        
            </ImageBackground>
            {/* </View> */}
            <View style={styles.rightHalf}>
                <Text style={styles.titleHeader}>
                    {titleHeader}
                </Text>
                <Text style={[styles.titleBody, {
                    width: titleBody.includes("Netflix") || titleBody.includes("howthorn")? 140.15 : 124} 
                    ]}>
                     {titleBody} 
                </Text>
                <Text style={styles.titleFooter}>
                    {titleFooter}
                </Text>
            </View>

        </View>
    )
}

export default MarketCards
const styles = StyleSheet.create({
        cardContainer:{
            // display: "flex",
            flex: 1,
            flexDirection:"row",
            justifyContent: "space-evenly",
            // width: 288,
            // height: 138,
            margin:10,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            shadowColor: "#000000",
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.10,
            shadowRadius: 6,
            elevation: 1,
        },
   
        image:{
         flex: 1,
        
        },
        cardBalance:{
            // position: "absolute",
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 23,
            backgroundColor:"#0E0A3B",
            width: "30%",
            height: 20,
            zIndex:1,
            margin: 10,
        },
        cardPrice:{
            color: "#ffffff",
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: 8,
            lineHeight: 9,
            // fontFamily:"Rubik",
        },
        rightHalf:{
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-around",
            marginLeft: 10,
            marginRight: 10,
            // width: 144,
            
        },
        titleHeader:{
            color: "#0F0F0F",
            fontWeight:"500",
            fontSize: 10,
            lineHeight: 12,
            fontFamily:"Rubik",
        },

        titleBody:{
            color: "#094850",
            fontWeight: "bold",
            fontSize: 14,
            lineHeight: 16,
            fontFamily:"Rubik",
            display: 'flex',
            flexWrap:"wrap", 
            padding: 2,
            // width: titleBody.includes("Netflix" || "howthorn")? 159.15 : 124,
        },
        titleFooter:{
            color: "#0F0F0F",
            fontWeight: "normal",
            fontSize: 10,
            lineHeight: 12,
            fontFamily:"Rubik",
        },
});