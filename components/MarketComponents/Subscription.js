import React from 'react'
import {StyleSheet, ScrollView, View, ImageBackground } from 'react-native'
import MarketCards from './MarketCards'
import MarketSectionHeader from './MarketSectionHeader'
import PictureCards from './PictureCards'

const Subscription = ({display}) => {

    const image = require('../../assets/youtube.png') 
    const  netflix = require('../../assets/netflix.png') 

    const picture = require("../../assets/TheMarket.png")
    const donation = require("../../assets/donation.png")
    const handmade = require("../../assets/HandMade.png")

    return (
        <View style={[styles.container, { display }]}>
            <MarketSectionHeader  marketSection="Trending"/>
                <View >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <MarketCards
                        price="120" 
                        image={image}
                        titleHeader="YOUTUBE" 
                        titleBody="60% off youtube prime subscription from youtube" 
                        titleFooter="get your 60% discounts"
                     />
                    <MarketCards 
                        price="120"
                        image={image}
                        titleHeader="YOUTUBE" 
                        titleBody="60% off youtube prime subscription from youtube"
                        titleFooter="get your 60% discounts"
                     />
                    <MarketCards 
                        price="120"
                        image={image}
                        titleHeader="YOUTUBE" 
                        titleBody="60% off youtube prime subscription from youtube"
                        titleFooter="get your 60% discounts"
                     />
                    </ScrollView>   
                </View> 
                <MarketSectionHeader marketSection="Popular subscription offers"/>
               <View >
                    {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}> */}
                    <MarketCards 
                         price="140"
                         image={netflix}
                         titleHeader="YOUTUBE" 
                         titleBody="90% off Netflix account subscription"
                         titleFooter="get your 60% discounts"

                     />
                      <MarketCards 
                         price="150"
                         image={netflix}
                         titleHeader="YOUTUBE" 
                         titleBody="90% off Netflix account subscription"
                         titleFooter="get your 60% discounts"
                     />
                      <MarketCards 
                        price="200"
                        image={netflix}
                        titleHeader="YOUTUBE" 
                        titleBody="90% off Netflix account subscription"
                        titleFooter="get your 60% discounts"
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
            {/* <Text style={styles.text}>Subscription</Text> */}
        </View>
    )
}

export default Subscription
const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        marginBottom:50,
        // marginTop:20,
    },
    // text:{
    //     color: "black",
    //     fontSize: 47,
    // },
    image:{
        width:259,
        height: 138,
        marginRight:15,
      },
    
});