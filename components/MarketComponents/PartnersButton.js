import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ArrowForwardPartner from '../SVGComponents/ArrowForwardPartner'

const PartnersButton = (props) => {

    const{goTo}=props

    return (
        <TouchableOpacity onClick={goTo} style={styles.linker}>
            <Text style={styles.linkerName}>Learn more <ArrowForwardPartner/></Text>
            
        </TouchableOpacity>
    )
}

export default PartnersButton
const styles = StyleSheet.create({
    linker:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        // backgroundColor: "#fff",
        width: 72,
        height: 19,
    },
    linkerName:{
        fontSize: 10,
        fontFamily: "rubik",
        fontWeight: "500",
        color: "#4F9A51",
        fontStyle: "normal",
        lineHeight: 16,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"

    }
})