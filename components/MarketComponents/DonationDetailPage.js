import React, {useState} from 'react'
import {StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button, Modal, SafeAreaView, TextInput  } from 'react-native'
import ArrowBackwardLeftIcon from '../SVGComponents/ArrowBackwardLeftIcon'
import ModalTemplate from './ModalTemplate'
import {connect} from 'react-redux'
import { useRoute } from '@react-navigation/native'
import Slider from '@react-native-community/slider';
import { standardizeInputData } from '@tensorflow/tfjs-layers/dist/engine/training'
import NotificationBell from '../SVGComponents/NotificationBell'
import DonationAmountSelector from './DonationAmountSelector'
import DonationSuccessful from './DonationSuccessful'
import DonationNotSuccessful from './DonationNotSuccessful'
import DonationWaistCoinError from './DonationWaistCoinError'

const partnersID = require ("../../assets/YaYa.png") 


const DonationDetailPage = (props) => {
    const{navigation: { goBack }}=props
    const route = useRoute()
     const data=route.params.item


     const [range,setRange]=useState("");
     const [input, setInput] = useState("");
     const [selected,setSelected]=useState("");


    const [change,setChange]= useState(false)
    const [success,setSuccess]= useState(false)
    const [unSuccess,setUnSuccess]= useState(false)
    const [signalError,setSignalError]= useState(false)
     
     const toggleChange=()=>{
         setChange(!change)
     }

     const toggleSuccess=()=>{
        setSuccess(!success)
        setChange(false)
    }

    const toggleUnSuccess=()=>{
        setSuccess(false)
        setUnSuccess(!unSuccess)
    }

    const toggleSignalError=()=>{
        setSignalError(!signalError)
    }
   
  

  
    const slideData = 500
    
  return (
      <SafeAreaView>
    <View style={[styles.pageContainer, { width: "100%"}]}>
        <ImageBackground source={{uri: data.image}} resizeMode='cover' style={styles.image}>
        <TouchableOpacity
            style={styles.backwardButton}
            onPress={()=>goBack()}
        >
            <Text><ArrowBackwardLeftIcon/></Text>
       </TouchableOpacity>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}  style={styles.roller}>
        <View style={styles.greenPart}>
            <View style={styles.expireCount}>
                <View style={styles.expire}>
                        <View style={styles.symbolHolder}>
                            <NotificationBell/>
                        </View>
                   <Text style={styles.time}>  {data.startTime} </Text>
                </View>
                <View style={styles.objective} >
                        <Text style={styles.objectiveText}>Objective</Text>
                        <Text style={styles.objectiveAmount}>WC {data.targetAmount}</Text>
                </View>
            </View>
            <View style={styles.productTitleCase}>
                <Text style={styles.mainTitle}>{data.cardTitle}</Text>

                <Slider
                    disabled="true"
                    value={slideData}
                    onValueChange={(value)=>setRange(value)}
                    style={{width: "100%", height: 60}}
                    minimumValue={0}
                    maximumValue={12000}
                    minimumTrackTintColor="#146209"
                    maximumTrackTintColor="#98F09B"
                    // customCountStyle=i
                />
                    <View style={styles.rangeWordCaseHolder}>
                    <View style={styles.rangeWordCase}>
                        <Text style={styles.rangeWord}>
                            Total Donation
                        </Text>
                        <Text style={styles.rangeWord}>
                            WC  { Math.floor(range)}
                        </Text>
                    </View>
                    </View>
            </View>

            <View style={styles.donationButtonHolder}>
                <TouchableOpacity style={styles.donationButton} onPress={toggleChange}>
                    <Text style={styles.donationButtonText}>
                        Purchase Discount
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.detailSection}>
                <Text style={styles.detailHeader}>
                        Details
                </Text>
                {/* <View style={styles.detailBoard}> */}
                <TextInput
                    onChangeText={(value)=>setInput(value)}
                    // onBlur={handleBlur('msg')}
                    value={input}
                    multiline={true}
                    numberOfLines={15}
                    style={styles.inputTitle2}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder= "About Donation"
                    placeholderTextColor= "#fff" 
                />

            </View>
        </View>

        </ScrollView>


            {/* // CONFIRM PURCHASE MODAL // */}
            <ModalTemplate  visible={change}>
                <DonationAmountSelector
                    purchasePix={partnersID}
                    toggleChange={toggleChange}
                    productDetail={data.titleBody}
                    toggleSuccess={toggleSuccess}
                    selected= {selected}
                    setSelected={setSelected}
                />
             </ModalTemplate> 


            {/* // SUCCESSFUL PURCHASE MODAL // */}
             <ModalTemplate visible={success}>
                <DonationSuccessful
                    toggleSuccess={toggleSuccess}
                    // togglePurchaseToken={togglePurchaseToken}
                    donationPrice={selected}
                />
             </ModalTemplate>

            {/* // UNSUCCESSFUL ERROR MODAL // */}
             <ModalTemplate visible={unSuccess}>
                <DonationWaistCoinError
                    toggleUnSuccess={toggleUnSuccess}
                />
             </ModalTemplate>

            {/* // SIGNAL ERROR MODAL // */}
             <ModalTemplate visible={signalError}>
                <DonationNotSuccessful
                    toggleSignalError={toggleSignalError}
                />
             </ModalTemplate>

        


        
    </View>
</SafeAreaView>
  )
}

export default DonationDetailPage;
const styles = StyleSheet.create({
    pageContainer: {
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'space-around',
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: 'relative',
        },
    image:{
        display: 'flex',
        width:"100%",
        height: 301,
        position: 'relative',
        },
    backwardButton:{
        display: 'flex',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width: 43,
        height: 43,
        borderRadius:50,
        paddingTop:5,
        backgroundColor: "#F2F2F2",
        position: 'absolute',
        left:10,
        top: 30,
    },
    roller:{
        display: 'flex',
        flexDirection: "column",
        width: "100%",
        // height: "30%",
        padding: 0,
        margin:0,
    },
    greenPart:{
        display: 'flex',
        flexDirection: 'column',
        width:"100%",
        height: 500,
        backgroundColor: "#4F9A51",
        padding: 20,
    },
    expireCount:{
        display: 'flex',
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        width: "100%",
        padding: 0,
        margin: 0,
    },
    expire:{
        display: 'flex',
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems: "center",
        width: "50%",
    },

    symbolHolder:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#98F09B",
        width: 18,
        height: 18,
        borderRadius: 3
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

    donationButtonHolder:{
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        height: 70,
    },

    inputTitle2:{
        backgroundColor:"#5AB15C",
        height: 150,
        padding:20,
        paddingTop:20,
        fontFamily:"Rubik300",
        color:"#fff",
        marginBottom:30,
        borderRadius: 8,
      },

    purchasePrice:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 14,
        color: "#D2FFCB",
    },
    expireText:{
        fontStyle:"normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF",
        marginLeft: 4,
    },
    productTitleCase:{
        display: 'flex',
        flexDirection: "column",
        justifyContent:"space-around",
        alignContent:"flex-start",
        marginTop: 15,
        height: 120,
        marginBottom:10,
    },
    mainTitle:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 21,
        color: "#FFFFFF",
    },
    sellerName:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#D2FFCB",
        // marginBottom: 15,
        // marginTop: 10,
    },
    pointCardCase:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        flexWrap: "wrap",
        height: 152,
        borderBottomColor:"#FFFFFF",
        borderBottomWidth: 0.25,
        borderTopColor:"#FFFFFF",
        borderTopWidth: 0.25,
    },
    pointCard:{
        width: "45%",
        height: 42,
        backgroundColor: "#59C65C",
        borderRadius: 4,
        display: 'flex',
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems: "flex-start",
        padding: 6,
        paddingLeft: 10,
        paddingRight: 10,
        // margin
    },
    pointTitle:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        color: "#D2FFCB",
    },

    pointInfo:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 12,
        color: "#FFFFFF",
    },

    detailBoard:{
        width: "94%",
        height: 114,
        backgroundColor: "#51AC54",
        borderRadius: 8,
        padding: 20,
        marginLeft: 8,
    },

    detailText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 12,
        color: "#F0F0F0",
    },

    detailHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 17,
        color: "#FFFFFF",
        marginTop: 20,
        marginBottom: 15,
    },

    partnerCardCase:{
        width: "94%",
        height: 54,
        backgroundColor: "#59C65C",
        borderRadius: 8,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        marginTop:15,
        marginLeft: 8,
    },

    picture:{
        width: 30,
        height: 30,
        borderRadius: 8,
        marginRight: 10,
        marginLeft: 10,
    },

    firstPart:{
        display: 'flex',
        flexDirection: "row",
        width: "90%",
    },

    secondPart:{
        display: 'flex',
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        width: "10%",
        color: "#FFFFFF",
    },
    partnerName:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 14,
        color: "#F0F0F0",
    },

    linkDirect:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 10,
        lineHeight: 12,
        color: "#F0F0F0",
    },

    websiteImage:{
        width: "94%",
        height: 139,
        borderRadius: 8,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 8,
    },

    webHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight:"500",
        fontSize: 12,
        lineHeight: 14,
        color: "#F0F0F0",
        marginTop: 15,
        marginLeft: 12,
        marginBottom: 10,
    },

    goTo:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#F0F0F0",
    },

    colorCover:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(11, 87, 13, 0.5)",
        borderRadius: 8,
        width: "100%",
        height: "100%"

    },

    websiteCase:{
        borderTopColor:"#FFFFFF",
        borderTopWidth: 0.25,
        marginTop: 20,
    },

    donationButton:{
        // position: "absolute",
        // bottom: 0,
        // left: "6%",
        width: 330,
        height: 64,
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    donationButtonText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: "#4F9A51",
    },

    rangeWord:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 10,
        color: "#FFFFFF",

    },

    rangeWordCase:{
        backgroundColor: "#146209",
        height: 30,
        width: 100,
        display:'flex',
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10
    },

    rangeWordCaseHolder:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }  
})