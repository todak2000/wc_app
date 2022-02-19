import React, {useState} from 'react'
// import { View, Image} from 'react-native'
import DonationCard from './DonationCard'
i



const DonationSlide = () => {
    const [formValues, setFormvalues] = useState({
        step: 1,
      });
    
     const image = require("../../assets/donationCard.png")

      const { step } = formValues;
    
      const nextStep = () => {
        const { step } = formValues;
        setFormvalues({ ...formValues, step: step + 1 });
       
      };

      {(function () {
        setTimeout(() => {
            nextStep()
          }, 9000)
      })();}
    
    //   const prevStep = () => {
    //     const { step } = formValues;
    //     setFormvalues({ ...formValues, step: step - 3 });
    //   };
    
      switch (step) {
        case 1:
          return (
            <DonationCard
            titleHeader="Title"
            titleBody="Provide Zamfara state with clean water"
            titleFooter="Objective"
            statusName="Fully funded"
            worth="10,000.00"
            image={image}
            />
          );
        case 2:
          return (
            <DonationCard
            
            
            />
          );
    
        case 3:
          return (
            <DonationCard
            titleFooter="Objective"
            statusName="Fully funded"
            worth="10,000.00"
            />

          );
    
    
        default:
          return setFormvalues(step=1);
    }
    
}

export default DonationSlide ;





// import React, {useState, useEffect, useRef} from 'react'
// import { View,Text,StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
// import DonationCarouselCard from './DonationCarouselCard'

// // const {width,height} = Dimensions.get("window")
// // let flatList

// // function infiniteScroll(dataList){
// //     const numberOfData = dataList.length
// //     let scrollValue=0, scrolled =0
// //     setInterval(function(){
// //             scrolled++
// //         if(scrolled < numberOfData)
// //             scrollValue = scrollValue + width
// //         else{
// //             scrollValue = 0
// //             scrolled  = 0
// //         }
// //         this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
// //         // this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
// //         // flatListRef.scrollToOffset({ animated: true, offset: scrollValue})
// //     }, 9000)
// // }  
// const { width, height } = Dimensions.get('window')
// let flatList

// function infiniteScroll(dataList){
//     const numberOfData = dataList.length
//     let scrollValue = 0, scrolled = 0

//     setInterval(function() {
//         scrolled ++
//         if(scrolled < numberOfData)
//         scrollValue = scrollValue + width

//         else{
//             scrollValue = 0
//             scrolled = 0
//         }

//         this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
//     }, 3000)
// }

// const DonationCarousel = ({data}) => {
//     const scrollX = new Animated.Value(0)
//     let position = Animated .divide(scrollX, width)
//     const [dataList,setDataList]=useState(data)

//     useEffect(()=>{
//         setDataList(data)
//         infiniteScroll(dataList)
//     })

//     if (data && data.length) {
//        return (
//         <View>
//             <FlatList data={data}
//             ref = {(flatList) => {this.flatList = flatList}}
            
//             keyExtractor={(item, index) => 'key' + index}
//             horizontal
//             pagingEnabled
//             scrollEnabled
//             snapToAlignment='center'
//             scrollEventThrottle={16}  
//             decelerationRate={"fast"}
//             showsHorizontalScrollIndicator={false}
//             renderItem={({item})=>{
//                 return <DonationCarouselCard item={item}/>
//             }}
//             onScroll={Animated.event(
//                 [{nativeEvent: { contentOffset: {  x: scrollX } } } ],
//                 {useNativeDriver: false}
//             )}

//             />
//             <View style={styles.dotView}>
//                 {data.map((_, i)=>{
//                     let opacity = position.interpolate({
//                         inputRange: [i-1,i,i+1],
//                         outputRange: [0.3,1,0.3],
//                         extrapolate: "clamp"
//                     })
//                     return(
//                         <Animated.View
//                         key={i}
//                         style={{opacity,height:10,width:10,backgroundColor:"#595959",margin:5, borderRadius:5}}
                        
//                         />
//                     )
//                 })}



//             </View>
//         </View>
//     ) 
//     }
//    console.log("No Project available"); 
//    return null
// }

// export default DonationCarousel
// const styles=StyleSheet.create({
//     dotView:{
//         flexDirection: "row",
//         justifyContent: "center"
//     }
// })