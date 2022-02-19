import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import DonationCard from './DonationCard'
// import DonationSlide from './DonationSlide'
import MarketSectionHeader from './MarketSectionHeader'
import PictureCards from './PictureCards'
// import DonationCarousel from './DonationCarousel'
// import { DummyData } from "./DummyData";

const Donation = ({display}) => {

    const picture = require("../../assets/TheMarket.png")
    const donation = require("../../assets/donation.png")
    const handmade = require("../../assets/HandMade.png")

    // const [donate, setDonate] = useState(initialState)
    const donate = [

        {
            titleHeader:"Title",
            titleBody:"Provide Zamfara state with clean water",
            titleFooter:"Objective",
            image: require("../../assets/donationCard.png"),
            statusName:"Fully funded",
            worth:"10,000.00",
            id:1
        },
        {
            titleHeader:"Title",
            titleBody:"Provide Zamfara state with clean water",
            titleFooter:"Objective",
            image: require("../../assets/donationCard.png"),
            statusName:"Fully funded",
            worth:"10,000.00",
            id:2
        },
   
    ];
    return (
        <View style={[styles.container, { display}]}>
        < MarketSectionHeader marketSection="Previous campaign"/>
        <View>
            {/* <DonationSlide/> */}
            {/* <DonationCarousel  */}
            {/* //  data={DummyData} */}
            {/* //  /> */}
        </View>
            <MarketSectionHeader marketSection="Previous campaign"/>
               <View >
               <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                {donate.map((donor)=>(
                    <DonationCard
                    key={donor.id}
                    image={donor.image}
                    titleHeader={donor.titleHeader}
                    titleBody={donor.titleBody} 
                    worth={donor.worth}
                    statusName={donor.statusName}
                    titleFooter={donor.titleFooter}
                    />
                ))}
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
            {/* <Text>Donation</Text> */}
        </View>
    )
}

export default Donation
const styles = StyleSheet.create({
    container: {
        display: "none",
    //   flex: 1,
        flex: 1,
        marginBottom:50,
    },   
});