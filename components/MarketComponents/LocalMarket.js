import React,{useState} from 'react'
import {ImageBackground, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import FilterIcon from '../SVGComponents/FilterIcon';
import MarketCards from './MarketCards';
import MarketSectionHeader from './MarketSectionHeader';
import PictureCards from './PictureCards';
import { Market } from './DummyData';
import { TabRouter } from '@react-navigation/native';
import ModalTemplate from './ModalTemplate';
import FilterSetting from './FilterSetting';
import InternetNotAvailable from './InternatNotAvailable';


const LocalMarket = (props) => {
    const{display,navigation}=props
    // console.log(props)
    const [text, changeText] = useState("");
    const [change, setChange] = useState("");
    const [noInternet, setNoInternet]=useState(false)

    const toggleChange=()=>{
        setChange(!change)
    }

    const toggleNoInternet=()=>{
        setNoInternet(!noInternet)
    }



    return (
        <View style={[styles.container, { display }]}>
                <TextInput
                    style={styles.input}
                    onChangeText={changeText}
                    value={text}
                    placeholder="search"
                />
                <TouchableOpacity style={styles.filterButton}  onPress={toggleChange}>
                    <View style={styles.filterTitle}>
                        <FilterIcon/>
                        <Text style={styles.filterText}>Filter Shop</Text>
                    </View>
                </TouchableOpacity>
                <MarketSectionHeader marketSection="Local Market"/>
                <View >
                <FlatList
                    keyExtractor={(item)=>item.id}
                    data={Market?.[0].foodStuff}
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
                    data={Market?.[0].fruitVegetable}
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
                <MarketSectionHeader marketSection="Subscriptions"/>
                <View >
                <FlatList
                    keyExtractor={(item)=>item.id}
                    data={Market?.[1].subscription}
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
                <MarketSectionHeader marketSection="Home Made Products"/>
                <View >
                <FlatList
                    keyExtractor={(item)=>item.id}
                    data={Market?.[2].homeMadeProduct}
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

            <ModalTemplate visible={change}>
                <FilterSetting
                    toggleChange={toggleChange}
                />
             </ModalTemplate>

             <ModalTemplate visible={noInternet}>
             <InternetNotAvailable
                    toggleUnSuccess={toggleNoInternet}
                />
             </ModalTemplate>

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