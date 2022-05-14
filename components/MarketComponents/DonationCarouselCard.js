import React,{useState} from 'react'
import { ImageBackground, Dimensions, StyleSheet, Text, View } from 'react-native'
import NotificationBell from '../SVGComponents/NotificationBell'
import Slider from '@react-native-community/slider';


const {width,height} =Dimensions.get("window")

const DonationCarouselCard = ({item}) => {

    const [range,setRange]=useState("")


const data= 500
    return (

        <ImageBackground source={{uri: item.image}} resizeMode='cover' imageStyle={{ borderRadius:10}}style={styles.image}>
            <View style={styles.cardContainer}>
            <View  style={styles.topPart}>

                <View style={styles.timeBoard}>
                   <Text style={styles.time}><NotificationBell/> {item.startTime}</Text> 
                </View>

            </View>
            <View style={styles.bottomPart}>
                <View style={styles.bottomTopPart}>
                    <Text style={styles.cardTitle}>
                        {item.cardTitle}   
                    </Text>

                    <View style={styles.rangeWordCase}>
                        <Text style={styles.rangeWord}>
                            Total Donation
                        </Text>
                        <Text style={styles.rangeWord}>
                            WC  { Math.floor(range)}
                        </Text>
                    </View>
                </View>
                {/* <SliderComponent
                    value={data}
                    maximumValue={100}
                    minimumValue={0}
                /> */}
                
                <Slider
                    disabled="true"
                    value={data}
                    onValueChange={(value)=>setRange(value)}
                    style={{width: "100%", height: 40}}
                    minimumValue={0}
                    maximumValue={1000}
                    minimumTrackTintColor="#FF0099"
                    maximumTrackTintColor="#FB79D8"
                    // customCountStyle=i
                />
        
                <View style={styles.bottomDownPart} >
                <View style={styles.objective} >
                    <Text style={styles.objectiveText}>Objective</Text>
                    <Text style={styles.objectiveAmount}>WC {item.targetAmount}</Text>
                </View>
                <View style={styles.donorCount}>
                <Text style={styles.join}>Join </Text>
                <Text style={styles.donor}>{item.donorCount} Donors</Text>
                </View>
                </View>
            </View>
        </View>       
        </ImageBackground>
    )
}

export default DonationCarouselCard
const styles = StyleSheet.create({
        cardContainer:{
            // display: "flex",
            flex: 1,
            flexDirection:"column",
            justifyContent: "space-between",
            width: "100%",
            height: 218,
            // margin:10,
            // backgroundColor: "#ffffff",
            borderRadius: 10,
            shadowColor: "#000000",
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.10,
            shadowRadius: 6,
            elevation: 1,
        },
        image:{
            flex: 1,
            width: width-70,
            height: 218,
            // margin: 5,
            marginLeft: 10,
            marginRight:10,
           },
   
        bottomPart:{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "#A5047A",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: 90,
            padding: 8,
        },
        timeBoard:{
            // position: "absolute",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#0E0A3B",
            borderRadius: 14,
            width: 94,
            height: 22,
            zIndex:1,
            margin: 10,
        },
        time:{
            color: "#ffffff",
            fontWeight: "500",
            fontStyle: "normal",
            fontSize: 8,
            lineHeight: 9,
            // fontFamily:"Rubik",
        },
        bottomDownPart:{
            display: 'flex',
           flexDirection: "row",
           justifyContent: "space-between",
           
        },

        objective:{
            width: "30%",
        },
        objectiveText:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 17,
            color: "#FFFFFF",
        },

        objectiveAmount:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 10,
            lineHeight: 12,
            color: "#FFFFFF",
        },


        bottomTopPart:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        },
        
        cardTitle:{
            width: "60%",
            fontSize: 12,
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: 14,
            color: "#FFFFFF",
        },
        
        donorCount:{
            display: 'flex',
            flexDirection:"column",
            justifyContent:"flex-end",
        },

        join:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 10,
            lineHeight: 10,
            color: "#FFD0F2",
        },

        donor:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 10,
            lineHeight: 10,
            color: "#FFD0F2",
        },

        rangeWord:{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 10,
            lineHeight: 10,
            color: "#FFD0F2",

        },

        rangeWordCase:{
            backgroundColor: "#0E0A3B",
            height: 30,
            width: 100,
            display:'flex',
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 10
        }   
    });