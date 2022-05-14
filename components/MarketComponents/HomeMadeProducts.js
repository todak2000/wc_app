import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MarketCards from './MarketCards';
import MarketSectionHeader from './MarketSectionHeader';
import PictureCards from './PictureCards';
import { Market } from './DummyData';

const HomeMadeProducts = ({display,navigation}) => {

    return (
        <View style={[styles.container, {display}]}>
            <MarketSectionHeader marketSection="Popular"/>
               <View style={styles.popularCase}>
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={Market?.[2].homeMadeProduct}
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
                        //  horizontal
                            pagingEnabled
                            scrollEnabled
                            snapToAlignment='center'
                            scrollEventThrottle={16}  
                            decelerationRate={"fast"}
                        showsVerticalScrollIndicator={false}
                    />
            </View>
                <MarketSectionHeader marketSection="Trending"/>
                <View >
                <FlatList
                        keyExtractor={(item)=>item.id}
                        data={Market?.[2].trending}
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
      popularCase:{
          height: 320,
      }
});