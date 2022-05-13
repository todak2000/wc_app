import React from 'react'
import {StyleSheet, ScrollView, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import MarketCards from './MarketCards'
import MarketSectionHeader from './MarketSectionHeader'
import PictureCards from './PictureCards'
import { Market } from './DummyData'

const Subscription = ({display,navigation}) => {

    return (
        <View style={[styles.container, { display }]}>
            <MarketSectionHeader  marketSection="Trending"/>
                <View >
                    <FlatList
                            keyExtractor={(item)=>item.id}
                            data={Market?.[1]?.subscription}
                            renderItem={({item})=>(
                            <TouchableOpacity 
                            onPress={()=>{navigation.navigate("Purchase",{item:item})}}
                            >
                            <MarketCards 
                            key={item.id}
                            price={item.price}
                            image={item.image}
                            titleHeader={item.titleHeader}
                            titleBody={item.titleBody}
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
                <MarketSectionHeader marketSection="Popular subscription offers"/>
               <View style={styles.popularCase}>
                        <FlatList
                            keyExtractor={(item)=>item.id}
                            data={Market?.[1].popular_subscription}
                            renderItem={({item})=>(
                            <TouchableOpacity onPress={()=>{navigation.navigate("Purchase",{item:item})}}>
                            <MarketCards 
                            key={item.id}
                            price={item.price}
                            image={item.image}
                            titleHeader={item.titleHeader}
                            titleBody={item.titleBody}
                            titleFooter={item.titleFooter}
                            />
                             </TouchableOpacity> 
                            )}
                            //  horizontal
                             pagingEnabled
                             scrollEnabled
                             snapToAlignment='center'
                             scrollEventThrottle={16}  
                             decelerationRate={"fast"}
                             showsVerticalScrollIndicator={false}
                        />
                    
                </View>
                
             <View style={{marginTop:10}}>
                <FlatList
                    keyExtractor={(item)=>item.id}
                    data={Market?.[4].bottomPictureCard}
                    renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{navigation.navigate("Purchase",{item:item})}}>
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
      popularCase: {
          height: 320,
      }
    
});