import React, {useState, useEffect, useRef} from 'react'
import { View,Text,StyleSheet, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native'
import DonationCarouselCard from './DonationCarouselCard' 

const { width, height } = Dimensions.get('window')

const DonationCarousel = ({data, navigation }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated .divide(scrollX, width)
    const [dataList,setDataList]=useState(data)

    // const list = useRef(null);

function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0
    // setInterval(function() {
    //     scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width
          
        else{
            scrollValue = 0
            scrolled = 0
        }
        // list.current.scrollToEnd({ animated: true });
        // this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        // list.current.scrollToOffset({ animated: true, offset: scrollValue})
    // }, 9000)
}

    
    useEffect(()=>{
        setDataList(data)
        infiniteScroll(dataList)
    })

    if (data && data.length) {
       return (
        <View>
            <FlatList data={data}
            // ref={list}
            // ref = {(flatList) => {this.flatList = flatList}}
            // ref={(ref) => (this.flatList = ref)}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment='center'
            scrollEventThrottle={16}  
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>{

                return  (
                <TouchableOpacity onPress={()=>{navigation.navigate("DonationDetail",{item:item})}}>
                    <DonationCarouselCard item={item}/>
                </TouchableOpacity> 
                )
            }}
            onScroll={Animated.event(
                [{nativeEvent: { contentOffset: {  x: scrollX } } } ],
                {useNativeDriver: false}
            )}

            />
            <View style={styles.dotView}>
                {data.map((_, i)=>{
                    let opacity = position.interpolate({
                        inputRange: [i-1,i,i+1],
                        outputRange: [0.3,1,0.3],
                        extrapolate: "clamp"
                    })
                    return(
                        <Animated.View
                        key={i}
                        style={{opacity,height:10,width:10,backgroundColor:"#4F9A51",margin:5, borderRadius:5}}
                        
                        />
                    )
                })}



            </View>
        </View>
    ) 
    }
   console.log("No Project available"); 
   return null
}

export default DonationCarousel
const styles=StyleSheet.create({
    dotView:{
        flexDirection: "row",
        justifyContent: "center"
    }
})