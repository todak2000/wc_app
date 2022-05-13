import React from 'react'
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DonationCard from './DonationCard'
// import DonationSlide from './DonationSlide'
import MarketSectionHeader from './MarketSectionHeader'
import PictureCards from './PictureCards'
import DonationCarousel from './DonationCarousel'
import { donationCarol_data, Market } from "./DummyData";

const Donation = ({display,navigation}) => {

    return (
        <View style={[styles.container, { display}]}>
        < MarketSectionHeader marketSection="Previous campaign"/>
        <View style={{marginTop:10}}>
            <DonationCarousel 
                data={Market?.[3].donationCarol_data}
                navigation={navigation}
            />
        </View>
            <MarketSectionHeader marketSection="Previous campaign"/>
               <View >
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={Market?.[3].donate}
                        renderItem={({item})=>(
                        <TouchableOpacity 
                        // onPress={()=>{navigation.navigate("Purchase",{item:item})}}
                        >
                        <DonationCard 
                            key={item.id}
                            image={item.image}
                            titleHeader={item.titleHeader}
                            titleBody={item.titleBody} 
                            worth={item.worth}
                            statusName={item.statusName}
                            titleFooter={item.titleFooter}
                        />
                            </TouchableOpacity> 
                        )}
                            horizontal
                            pagingEnabled
                            scrollEnabled
                            snapToAlignment='center'
                            scrollEventThrottle={16}  
                            decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
               <View style={{marginTop:10}}>
               <FlatList
                    keyExtractor={(item)=>item.id}
                    data={Market?.[4].bottomPictureCard}
                    renderItem={({item})=>(
                    <TouchableOpacity 
                    // onPress={()=>{navigation.navigate("Purchase",{item:item})}}
                    >
                        <PictureCards
                        key={item.id}
                        index={item.id}
                        section ={item.section}
                        source={item.source}
                    />
                        </TouchableOpacity> 
                    )}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment='center'
                        scrollEventThrottle={16}  
                        decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                />
                </View>           
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