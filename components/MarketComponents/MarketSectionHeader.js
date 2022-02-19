import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const MarketSectionHeader = (props) => {
    const{marketSection}=props
    return (
        <View>
            <Text style={Styles.name}>{marketSection}</Text>
        </View>
    )
}

export default MarketSectionHeader
const Styles= StyleSheet.create({
        name:{
            marginTop:25,
            margin: 3,
            fontFamily:"Rubik",
            fontWeight: "500",
            fontSize: 16,
            // backgroundColor:"#ffffff", 
        },
})