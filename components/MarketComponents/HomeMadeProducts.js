import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import MarketCards from './MarketCards';
import MarketSectionHeader from './MarketSectionHeader';
import PictureCards from './PictureCards';

const HomeMadeProducts = ({display}) => {

    const giftItem = require("../../assets/homemade.png")
    const skincare = require("../../assets/homemadeBeauty.png")
    const pillow = require("../../assets/homemadePillow.png")
    
    const picture = require("../../assets/TheMarket.png")
    const donation = require("../../assets/donation.png")
    const handmade = require("../../assets/HandMade.png")

    return (
        <View style={[styles.container, {display}]}>
            <MarketSectionHeader marketSection="Popular"/>
               <View >
                    <MarketCards
                         price="140"
                         image={giftItem}
                         titleHeader="TANZANOC" 
                         titleBody="Auhentic Ethnic Handicraft gift item"
                         titleFooter="Handicraft"

                     />
                      <MarketCards 
                         price="150"
                         image={skincare}
                         titleHeader="HOWTHORW" 
                         titleBody="Howthorn Hand made Skincare for females"
                         titleFooter="Handicraft"
                     />
                      <MarketCards 
                        price="200"
                        image={giftItem}
                        titleHeader="TANZANOC" 
                        titleBody="Auhentic Ethnic Handicraft gift item"
                        titleFooter="Handicraft"
                     />
                </View>
                <MarketSectionHeader marketSection="Trending"/>
                <View >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <MarketCards 
                        price="700"
                        image={pillow}
                        titleHeader="TANZANOC" 
                        titleBody="Handmade Africa pillow"
                        titleFooter="Handicraft"
                     />
                       <MarketCards 
                        price="700"
                        image={pillow}
                        titleHeader="TANZANOC" 
                        titleBody="Handmade Africa pillow"
                        titleFooter="Handicraft"
                     />
                     <MarketCards 
                        price="700"
                        image={pillow}
                        titleHeader="TANZANOC" 
                        titleBody="Handmade Africa pillow"
                        titleFooter="Handicraft"
                     />
                      
                    </ScrollView>   
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
            {/* <Text>HomeMadeProducts</Text> */}
        </View>
    )
}

export default HomeMadeProducts
const styles = StyleSheet.create({
    container: {
        display: "none",
        flex: 1,
        marginBottom:50,
    },

    image:{
        width:259,
        height: 138,
        marginRight:15,
      },
});