import React from 'react'
import {StyleSheet, Image, Text, View, ImageBackground } from 'react-native'

const DonationCard = (props) => {

    const {titleHeader,titleBody,titleFooter,image,statusName,worth}= props
     

    return (
        <View  style={[styles.cardContainer, { width: 307.3,height: 140 }]}>
                <ImageBackground source={image} resizeMode='cover' imageStyle={{ borderBottomLeftRadius:10, borderTopLeftRadius:10,}}style={styles.image}>
                    </ImageBackground>

            <View style={styles.rightHalf}>
                
                    <View style={styles.cardStatus}>
                        <Text style={styles.status}>{statusName}</Text> 
                    </View>

                <View style={styles.rightHalfChild}>
                    <Text style={styles.titleHeader}>
                        {titleHeader}
                    </Text>
                    <Text style={[styles.titleBody, {width:140.15}]}>
                        {titleBody} 
                    </Text>
                    
                    <View style={styles.generalFooter}>
                        <Text style={styles.titleFooter}>
                            {titleFooter}
                        </Text>
                        <Text style={styles.worth}>
                            WC {worth}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DonationCard
const styles = StyleSheet.create({
    cardContainer:{
        // display: "flex",
        flex: 1,
        flexDirection:"row",
        justifyContent: "space-around",
        // width: 288,
        // height: 138,
        margin:10,
        backgroundColor: "#094850",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6,
        elevation: 1,
    },

    image:{
     flex: 1,
    },
    
    cardStatus:{
    
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
        backgroundColor:"#1E8CA5",
        width: "50%",
        height: 23,
        zIndex:1,
        margin: 5,
       
    },
    status:{
        color: "#ffffff",
        fontWeight: "500",
        fontStyle: "normal",
        fontSize: 8,
        lineHeight: 9,
        fontFamily:"Rubik",
    },
    rightHalf:{
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        alignItems:"flex-end",
        marginLeft: 10,
        marginRight: 10,
        height: 100,
        
        
    },
    titleHeader:{
        color: "#ffffff",
        fontWeight:"500",
        fontSize: 10,
        lineHeight: 12,
        fontFamily:"Rubik",
    },

    titleBody:{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        fontFamily:"Rubik",
        display: 'flex',
        flexWrap:"wrap", 
        padding: 2,
        marginBottom: 9,
    },
    titleFooter:{
        color: "#ffffff",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        fontFamily:"Rubik",
    },
    worth:{
        color: "#ffffff",
        fontWeight: "normal",
        fontSize: 8,
        lineHeight: 12,
        fontFamily:"Rubik",
    },
    generalFooter:{
        display: 'flex',
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        textAlign:"left",
    },
  
});