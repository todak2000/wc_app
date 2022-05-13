import React from 'react'
import {StyleSheet, Image, Text, View } from 'react-native'
import PartnersButton from './PartnersButton'

const PartnersCard = (props) => {
    const {partnerName,partnerIndustry,partnersID,index}=props

 
    
 
    return (
        <View style={[styles.container,{backgroundColor:index % 2 !== 0? "#D2FFCB" : "#FFFFFF"}]}>
            <View style={styles.leftHand}> 
                <Image source={partnersID} resizeMode='cover' style={styles.picture}/>
                <View style={styles.partnerWord}> 
                    <Text style={styles.partnerName}>{partnerName}</Text>
                    <Text style={styles.partnerIndustry}>{partnerIndustry}</Text>
                </View>
            </View>
            <View style={styles.rightHand}>
            <PartnersButton />
            </View>
        </View>
    )
}

export default PartnersCard
const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 307.3,
        height: 85,
        // backgroundColor: "#D2FFCB",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 6,
        elevation: 1,
        marginTop: 15,
    },
    leftHand:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems:'center',
        marginLeft:22,
    },
    picture:{
        width: 52,
        height: 46,
        borderRadius: 12,
    },
    partnerWord:{
        marginLeft: 10,    
    },
    partnerName:{
        fontSize: 14,
        fontFamily: "rubik",
        fontWeight: "500",
        color: "#4B4B4B",
        fontStyle: "normal",
    },
    PartnerIndustry:{
        fontSize: 12,
        fontFamily: "rubik",
        fontWeight: "500",
        color: "#4B4B4B",
        fontStyle: "normal",
    },
    rightHand:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        margin: 15,
    },

})