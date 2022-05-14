import React from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image,} from 'react-native';
import PurchaseSuccessIcon from '../SVGComponents/PurchaseSuccessIcon';
import TimesIcon from '../SVGComponents/TimesIcon';


const DonationSuccessful = (props) => {
    const{toggleSuccess, donationPrice}=props
     
  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleSuccess}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.greenPart}>
            <View style={{marginTop: 20}}>
                <PurchaseSuccessIcon/>
            </View>
            <Text style={styles.successHeader}>{donationPrice}</Text>

            <Text style={styles.successStatement}>
                Thank you! your donation is successful
                and we are glad for your contribution
            </Text>
           
            <TouchableOpacity style={styles.confirmButton} >
                <Text style={styles.confirmButtonText}>Go To Market</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}
export default DonationSuccessful;
const styles = StyleSheet.create({
 modalCase:{
        width: "90%",
        backgroundColor: "transparent",
        bottom: "50%",
        top: "50%",
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
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgba(36, 210, 158, 1)",
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
        borderRadius: 12,
        height: 250,
        width: "100%",
    },
    successHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 28,
        color: "#FFFFFF",       
    },
    successStatement:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        textAlign: "center",
        color: "#FFFFFF",
        width: "70%",
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