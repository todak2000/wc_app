import React from 'react'
import { TouchableOpacity,StyleSheet, View, Text, ImageBackground, ScrollView,} from 'react-native';
import CopyTokenIcon from '../SVGComponents/CopyTokenIcon';
import PurchaseSuccessIcon from '../SVGComponents/PurchaseSuccessIcon';
import TimesIcon from '../SVGComponents/TimesIcon';


const PurchaseSuccessToken = (props) => {
    const{togglePurchaseToken,image,productWord}=props
     
  return (
        <View style={styles.modalCase}>
            <View style={styles.closeCase}>
                <TouchableOpacity style={styles.modalClose}  onPress={togglePurchaseToken}>
                    <TimesIcon/>
                </TouchableOpacity>
            </View>
        <View style={styles.greenPart}>
         <View>
             <Text style={styles.purchaseHeader}>Purchase successful</Text>
             <ImageBackground source={image} resizeMode='cover' imageStyle={{borderRadius:10}} style={styles.image}/>
             {/* <Image source={image} resizeMode='cover' style={styles.image}/> */}
         </View>
        <ScrollView Vertical showsVerticalScrollIndicator={false} >
            <View>
            <View style={styles.descriptionCase}>
                <Text style={styles.descriptionHeader}>PURCHASED ON 9/12/2021</Text>
                <Text style={styles.descriptionWord}>{productWord}</Text>
                <Text style={styles.VendorDescription}>By YAYA Market</Text>
            </View>

            <View style={styles.lastContainer}>
                <Text style={styles.caseHeader}>Redeeming instructions</Text>
                <View style={styles.bottomContainer}>
                    <Text style={styles.expireTimer}>EXPIRES IN : 11 days : 15hr : 50m : 10s</Text>
                    <TouchableOpacity style={styles.wasteCoinPurchaseButton}>
                            <PurchaseSuccessIcon
                                size="20"
                            />
                        <Text style={styles.wasteCoinText}>
                            Buy the offer with WasteCoin
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.tokenContainer}>
                        <Text style={styles.tokenStatement}>
                            Copy the code and go to the website
                            for your purchase
                        </Text>

                        <TouchableOpacity style={styles.tokenButton}>
                            <CopyTokenIcon/>
                            <Text style={styles.tokenButtonText}>Copy and go to website</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
        </View>
     </View>
  )
}
export default PurchaseSuccessToken;
const styles = StyleSheet.create({
 modalCase:{
        width: "100%",
        backgroundColor: "transparent",
        bottom: 0,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: "center"
    },
    closeCase:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: 40,
    },
    modalClose:{
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignContent: "center",
        width: 40,
    },
    greenPart:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "rgba(20, 98, 9, 1)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 586,
        width: "100%",
        padding: 25,
    },
    purchaseHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#FFFFFF",
        marginBottom: 20,
    },
    image:{
        width:"100%",
        height: 166,
    },
    descriptionCase:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 100,
        borderBottomColor:"#3E929C",
        borderBottomWidth: 1,
        width: "100%",
        marginTop: 15
    },
    descriptionHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#87DC7A"
    },
    descriptionWord:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 18,
        color: "#FFFFFF",
        width: "80%",
    },
    VendorDescription:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#87DC7A",
    },
    lastContainer:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        height: 250,
    },
    caseHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 14,
        color: "#87DC7A",
        marginBottom:5,
        marginTop: 10,
    },
    bottomContainer:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "flex-start",
        height: 200,
        paddingLeft: 8,
    },
    expireTimer:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        color: "#FFFFFF",
    },
    wasteCoinPurchaseButton:{
        width: 314,
        height: 61,
        backgroundColor: "#1E7911",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
  
    wasteCoinText:{
        marginBottom: 10,
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF",

    },
    tokenContainer:{
        width: 313,
        height: 96,
        backgroundColor: "#1E7911",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center"

    },
    tokenStatement:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 10,
        lineHeight: 12,
        textAlign: "center",
        color: "#FFFFFF",
        width: "60%"

    },
    tokenButton:{
        width: 207,
        height: 34,
        backgroundColor: "#146209",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    tokenButtonText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 8,
        lineHeight: 12,
        textAlign: "center",
        color: "#FFFEFE",
        marginLeft: 15,
    },
    confirmButton:{
        width: 307,
        height: 54,
        backgroundColor: "#FFFFFF",
        shadowColor: "rgb(79, 154, 81)",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 1,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        marginTop: 20,
    },
    confirmButtonText:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 12,
        color: "#4F9A51",
        padding: 4,
    }
})