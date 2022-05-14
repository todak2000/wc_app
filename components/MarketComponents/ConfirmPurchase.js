import React from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image,} from 'react-native';
import TimesIcon from '../SVGComponents/TimesIcon';


const ConfirmPurchase = (props) => {
    const{purchasePix,productDetail,toggleChange,toggleSuccess}=props
     
  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleChange}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.greenPart}>
            <Text style={styles.topicHeader}>Purchase</Text>
            <View style={styles.cardPart}>
                <View style={styles.ImageCase}>
                    <Image source={purchasePix} resizeMode='cover' style={styles.picture}/>
                </View>
                <View style={styles.descriptionCase}>
                    <Text style={styles.product}>PRODUCT</Text>
                    <Text style={styles.productDetail}>{productDetail}</Text>
                    <Text style={styles.description} >DESCRIPTION</Text>
                    <Text style={styles.descriptionDetail}>
                        The modern bag of rice with not less than
                        15 full basket of 50KG of fruits made available
                    </Text>

                </View>
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={toggleSuccess}>
                <Text style={styles.confirmButtonText}>Confirm purchase</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

export default ConfirmPurchase;
const styles = StyleSheet.create({
    modalCase:{
        width: "100%",
        backgroundColor: "transparent",
        bottom: 0,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
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
        alignItems: "center",
        backgroundColor: "rgba(20, 98, 9, 1)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 265,
    },
    topicHeader:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF",
        marginBottom: 15,
        marginTop: 15,
    },
    cardPart:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignContent: "center",
        width: "100%",
        height: 100,
    },
    ImageCase:{
        height: 100,
    },
    descriptionCase:{
        width: "70%",
        height: 100,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
    },
    product:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        color: "#D2FFCB",
    },

    productDetail:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 16,
        color: "#FFFFFF",
    },

    description:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        color: "#D2FFCB",
    },
    descriptionDetail:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: 12,
        lineHeight: 14,
        color:"#FFFFFF",
    },
    confirmButton:{
        width: 307,
        height: 54,
        backgroundColor: "#4F9A51",
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
        color: "#FFFFFF",
        padding: 4,
    }
})