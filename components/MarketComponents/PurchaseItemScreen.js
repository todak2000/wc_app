import React, {useState} from 'react'
import {StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, ScrollView, Button, Modal, SafeAreaView } from 'react-native'
import ArrowBackwardLeftIcon from '../SVGComponents/ArrowBackwardLeftIcon'
import ArrowForwardPartner from '../SVGComponents/ArrowForwardPartner'
import PurchaseExpirationIcon from "../SVGComponents/PurchaseExpirationIcon"
import ConfirmPurchase from './ConfirmPurchase'
import ModalTemplate from './ModalTemplate'
import {connect} from 'react-redux'
import { useRoute } from '@react-navigation/native'
import SuccessfulPurchase from './SuccessfulPurchase'
import UnsuccessfulPurchase from './UnsuccssfulPurchase'
import SignalError from './SignalError'
import PurchaseSuccessToken from './PurchaseSuccessToken'

const partnersID = require ("../../assets/YaYa.png") 


const PurchaseItemScreen = (props) => {
    const{navigation: { goBack }}=props
    const route = useRoute()
     const data=route.params.item

    const [change,setChange]= useState(false)
    const [success,setSuccess]= useState(false)
    const [unSuccess,setUnSuccess]= useState(false)
    const [signalError,setSignalError]= useState(false)
    const [purchaseToken,setPurchaseToken]= useState(false)
     
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
   
    const togglePurchaseToken=()=>{
        setSuccess(false)
        setPurchaseToken(!purchaseToken)
    }

  

    
  return (
      <SafeAreaView>
    <View style={[styles.pageContainer, { width: "100%"}]}>
        <ImageBackground source={data.image} resizeMode='cover' style={styles.image}>
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
                  <PurchaseExpirationIcon/>
                    <Text style={styles.expireText}>
                        Expires in 3 days
                    </Text>
                </View>
                <Text style={styles.purchasePrice}>WC {data.price}</Text>
            </View>
            <View style={styles.productTitleCase}>
                <Text style={styles.mainTitle}>{data.titleBody}</Text>
                <Text style={styles.sellerName}>By {data.titleHeader}</Text>
            </View>
            <View style={styles.pointCardCase}>
                <View style={[styles.pointCard,{marginBottom:20}]}>
                    <Text style={styles.pointTitle}>YOU GET</Text>
                    <Text style={styles.pointInfo}>50 bags of rice & fruits</Text>
                </View>
                <View style={styles.pointCard}>
                    <Text style={styles.pointTitle}>QUANTITY</Text>
                    <Text style={styles.pointInfo}>1 per user</Text>
                </View>
                <View style={styles.pointCard}>
                    <Text style={styles.pointTitle}>TIME TO REDEEM</Text>
                    <Text style={styles.pointInfo}>12 hours</Text>
                </View>
                <View style={styles.pointCard}>
                    <Text style={styles.pointTitle}>SHIPPING</Text>
                    <Text style={styles.pointInfo}>No fee</Text>
                </View>
            </View>
            <View style={styles.detailSection}>
                <Text style={styles.detailHeader}>
                        Details
                </Text>
                <View style={styles.detailBoard}>
                    <Text style={styles.detailText}>
                            About the offer
                    </Text>
                </View>

                <TouchableOpacity style={styles.partnerCardCase}>
                <View style={styles.firstPart}>
                    <Image source={partnersID} resizeMode='cover' style={styles.picture}/>
                    <View style={styles.partnerTextCase}>
                        <Text style={styles.partnerName}>
                            {data.titleHeader}
                        </Text>
                        <Text style={styles.linkDirect}>
                            Learn more
                        </Text>
                    </View>
                </View>
                <View style={styles.secondPart}>
                    <ArrowForwardPartner
                        color="#FFFFFF"
                    />
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.websiteCase}>
                <Text style={styles.webHeader}>
                        Links
                </Text>
                <ImageBackground source={partnersID} resizeMode='cover' imageStyle={{borderRadius:10}} style={styles.websiteImage}>
                    <TouchableOpacity style={styles.colorCover}>
                        <Text style={styles.goTo}>Go to website</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>           
        </View>
        </ScrollView>
        <TouchableOpacity style={styles.purchaseButton} onPress={toggleChange}>
                <Text style={styles.purchaseButtonText}>
                    Purchase Discount
                </Text>
        </TouchableOpacity>

            {/* // CONFIRM PURCHASE MODAL // */}
            <ModalTemplate  visible={change}>
                <ConfirmPurchase
                    purchasePix={partnersID}
                    toggleChange={toggleChange}
                    productDetail={data.titleBody}
                    toggleSuccess={toggleSuccess}
                />
             </ModalTemplate> 


            {/* // SUCCESSFUL PURCHASE MODAL // */}
             <ModalTemplate visible={success}>
                <SuccessfulPurchase
                    toggleSuccess={toggleSuccess}
                    togglePurchaseToken={togglePurchaseToken}
                
                />
             </ModalTemplate>

            {/* // UNSUCCESSFUL ERROR MODAL // */}
             <ModalTemplate visible={unSuccess}>
                <UnsuccessfulPurchase
                    toggleUnSuccess={toggleUnSuccess}
                />
             </ModalTemplate>

            {/* // SIGNAL ERROR MODAL // */}
             <ModalTemplate visible={signalError}>
                <SignalError
                    toggleSignalError={toggleSignalError}
                />
             </ModalTemplate>

             {/* // PURCHASE SUCCESS TOKEN // */}
             <ModalTemplate visible={purchaseToken}>
                <PurchaseSuccessToken
                    togglePurchaseToken={togglePurchaseToken}
                    image={data.image}
                    productWord={data.titleBody}
                />
             </ModalTemplate>
           
        


        
    </View>
</SafeAreaView>
  )
}

export default PurchaseItemScreen;
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
        height: 850,
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
        height: 90,
        marginBottom:10,
    },
    mainTitle:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 28,
        lineHeight: 28,
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
    purchaseButton:{
        position: "absolute",
        bottom: 0,
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
    purchaseButtonText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: "#4F9A51",
    }
    




    
})