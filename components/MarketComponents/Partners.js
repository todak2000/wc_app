import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import MarketSectionHeader from './MarketSectionHeader'
import PartnersCard from './PartnersCard'
import PictureCards from './PictureCards'

const Partners = ({display}) => {

    const yaya = require ("../../assets/YaYa.png") 
    const eden = require ("../../assets/Eden.png") 
    const netflixer = require ("../../assets/NetflixPartners.png") 
    const youtuber = require ("../../assets/youtubePartners.png") 

    const picture = require("../../assets/TheMarket.png")
    const donation = require("../../assets/donation.png")
    const handmade = require("../../assets/HandMade.png")




    return (
        <View style={[styles.container, { display }]}>
             <MarketSectionHeader marketSection="Our Partners"/>
               <View >
                   <PartnersCard
                   backgroundColor="#D2FFCB"
                    partnersID={yaya}
                    partnerName="YAYA Market"
                    partnerIndustry="Food Industry"
                   />
                    <PartnersCard
                    backgroundColor="#ffffff"
                    partnersID={eden}
                    partnerName="Eden Crafts"
                    partnerIndustry="Craft Industry"
                   />
                    <PartnersCard
                    backgroundColor="#D2FFCB"
                    partnersID={netflixer}
                    partnerName="Netflix"
                    partnerIndustry="Movies Industry"
                   />
                    <PartnersCard
                    backgroundColor="#ffffff"
                    partnersID={youtuber}
                    partnerName="Youtube"
                    partnerIndustry="Media Industry"
                   />
                </View>
                <View style={{marginTop:10}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <PictureCards
                        backgroundColor='rgba(255, 8, 191, 0.58)'
                        section ="Browse Donation"
                        source={donation}
                    />
                    <PictureCards
                        backgroundColor="rgba(255, 8, 191, 0.58)"
                        section ="The Market Place"
                        source={picture}
                    />
                    <PictureCards
                      backgroundColor="rgba(9, 72, 80, 0.58)" 
                      section = "Home Made Products" 
                      source={handmade}
                    />
                    </ScrollView>  
                </View> 
            {/* <Text>Partner</Text> */}
        </View>
    )
}

export default Partners
const styles = StyleSheet.create({
    container: {
        // display: "none",
        flex: 1,
        marginBottom:50,
    },
    image:{
        width:259,
        height: 138,
        marginRight:15,
      },
});