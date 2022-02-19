import React,{useState} from 'react'
import {ImageBackground, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FilterIcon from '../SVGComponents/FilterIcon';
import MarketCards from './MarketCards';
import MarketSectionHeader from './MarketSectionHeader';
import PictureCards from './PictureCards';

const LocalMarket = ({display}) => {
    const [text, changeText] = useState("");


    
    const image = require('../../assets/youtube.png') 

    const grains= require('../../assets/grains.png') 

    const vegetable= require('../../assets/vegetableMarket.png') 

    const homemade= require('../../assets/homemade.png') 

    const picture = require("../../assets/TheMarket.png")
    const donation = require("../../assets/donation.png")
    const handmade = require("../../assets/HandMade.png")
        



    return (
        <View style={[styles.container, { display }]}>
              <TextInput
                    style={styles.input}
                    onChangeText={changeText}
                    value={text}
                    placeholder="search"
                />
                <TouchableOpacity style={styles.filterButton}>
                    <View style={styles.filterTitle}>
                        <FilterIcon/>
                        <Text style={styles.filterText}>Filter Shop</Text>
                    </View>
                </TouchableOpacity>
                <MarketSectionHeader marketSection="Local Market"/>
               <View >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <MarketCards 

                         price="140"
                        image={grains}
                        titleHeader="YAYA Market" 
                        titleBody="50 bags of rice and Full basket of fruits"
                        titleFooter="Food store"
                     />
                      <MarketCards 
                         price="150"
                        image={grains}
                        titleHeader="YAYA Market" 
                        titleBody="50 bags of rice and Full basket of fruits"
                        titleFooter="Food store"
                     />
                      <MarketCards 
                        price="200"
                        image={grains}
                        titleHeader="YAYA Market" 
                        titleBody="50 bags of rice and Full basket of fruits"
                        titleFooter="Food store"
                     />
                     
                    </ScrollView>   
                </View> 
                <View style={{marginTop:10}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <MarketCards 
                         price="120"
                        image={vegetable}
                        titleHeader="YAYA Market" 
                        titleBody="50 bags of rice and Full basket of fruits"
                        titleFooter="Food store"
                     />
                    <MarketCards 
                         price="100"
                        image={vegetable}
                        titleHeader="YAYA Market" 
                        titleBody="50 bags of rice and Full basket of fruits"
                        titleFooter="Food store"
                     />
                    <MarketCards
                        price="120" 
                        image={vegetable}
                        titleHeader="YAYA Market" 
                        titleBody="50 bags of rice and Full basket of fruits"
                        titleFooter="Food store"
                     />
                       
                    </ScrollView>   
                </View> 
                <MarketSectionHeader marketSection="Subscriptions"/>
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
                <MarketSectionHeader marketSection="Home Made Products"/>
                <View >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <MarketCards 
                        price="700"
                        image={homemade}
                        titleHeader="TANZANOC" 
                        titleBody="Authentic Ethnic Handicraft gift item"
                        titleFooter="Handicraft"
                     />
                       <MarketCards 
                        price="700"
                        image={homemade}
                        titleHeader="TANZANOC" 
                        titleBody="Authentic Ethnic Handicraft gift item"
                        titleFooter="Handicraft"
                     />
                     <MarketCards 
                        price="700"
                        image={homemade}
                        titleHeader="TANZANOC" 
                        titleBody="Authentic Ethnic Handicraft gift item"
                        titleFooter="Handicraft"
                     />
                      
                    </ScrollView>   
                </View> 
                <View style={{marginTop:10}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rollOne}>
                    <PictureCards
                        backgroundColor='rgba(255, 8, 191, 0.58)'
                        section ="Browse Donation"source={donation}
                    />
                    <PictureCards
                        backgroundColor="rgba(255, 8, 191, 0.58)"
                        section ="The Market Place"source={picture} 
                    />
                    <PictureCards
                      backgroundColor="rgba(9, 72, 80, 0.58)" 
                      section = "Home Made Products" source={handmade}
                    />
                    </ScrollView>  
                </View> 
            {/* <Text>LocalMarket</Text> */}
        </View>
    )
}

export default LocalMarket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:50,
        marginTop:20,
    },
    input: {
        height: 43,
        borderWidth: 1,
        borderColor: "#4F9A51",
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
      },
      filterButton:{
        display: 'flex',
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#4F9A51",
        marginTop: 12,
        borderRadius: 6,
        height: 46,
        // boxShadow: 0 4 18 );
        shadowColor: "#4F9A51",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.40,
        shadowRadius: 6,
        elevation: 3,
      },
      filterTitle:{
        display: 'flex',
        flexDirection: "row",
        justifyContent:"center",
        // fontSize: 19,
      },
      filterText:{
        marginLeft: 4,
        color: "#ffffff",
        // fontSize: 16,
      },

      rollOne:{
          backgroundColor: "#ffffff",
      },
      image:{
        width:259,
        height: 138,
        marginRight:15,
      },
});