import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MarketSectionHeader from './MarketSectionHeader'
import PartnersCard from './PartnersCard'
import PictureCards from './PictureCards'
import { Market } from "./DummyData";


const Partners = ({display,navigation}) => {

    return (
        <View style={[styles.container, { display }]}>
             <MarketSectionHeader marketSection="Our Partners"/>
               <View >
                    <FlatList
                    keyExtractor={(item)=>item.id}
                    data={Market?.[5].partnerData}
                    renderItem={({item})=>(
                    <TouchableOpacity 
                        onPress={()=>{navigation.navigate("about_site",{item:item})}}
                    >
                      <PartnersCard
                        key={item.id}
                        index={item.id}
                        partnersID={item.view}
                        partnerName= {item.partnerName}
                        partnerIndustry= {item.partnerIndustry}
                       />
                        </TouchableOpacity> 
                    )}
                        horizontal= {false}
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