import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import GbemiHeader from '../SVGComponents/GbemiHeader'

const MarketHeader = ({balance}) => {
    return (
        <View style={styles.dominantHeader}>
            <View style={styles.headerContainer}>
                <View style={styles.headLeft}>
                    <GbemiHeader/>
                    <View style={styles.title}>
                            <Text style={styles.titleOutter}>
                                Welcome Gbemi,{"\n"}
                                    <Text style={styles.titleInner}>
                                        The MarketPlace.
                                    </Text>
                            </Text>
                    </View>
                </View>
                <View style={styles.headRight}>
                    <Text style={styles.totalBalance}>{balance}</Text>
                </View>
            </View>
        </View>
    )
}

export default MarketHeader
const styles = StyleSheet.create({
    dominantHeader:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: 60,
    },
    headerContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headLeft:{
        // width: "80%",
        display: 'flex',
        flexDirection:"row",
        justifyContent: "space-around"
    },
    title:{
        // display: "flex",
        flexDirection: "column",
        // flexWrap:'wrap',
        justifyContent: "center",
        marginLeft: 10,
    },
    titleOutter:{
       
        fontFamily: "Rubik",
        fontSize: 16,
        fontWeight: "500",
    },
    titleInner:{
        fontFamily: "Rubik",
        fontSize: 15,
        fontWeight: "normal"
    },
    headRight:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
        backgroundColor:"#D2FFCB",
        width: "20%",
    },
    totalBalance:{
        fontSize: 16,
        fontFamily: "Rubik",
        fontWeight: "600",
        color: "#69BE5D",
    },
  });