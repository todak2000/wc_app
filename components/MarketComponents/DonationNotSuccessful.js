import React from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image,} from 'react-native';
import { DonationUnsuccessfulIcon } from '../SVGComponents/DonationUnsuccessfulIcon';
import ErrorMessageIcon from '../SVGComponents/ErrorMessageIcon';
import TimesIcon from '../SVGComponents/TimesIcon';
import { useNavigation } from '@react-navigation/native';


const DonationNotSuccessful = (props) => {
    const{toggleUnSuccess}=props
    const navigate = useNavigation();
     
  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleUnSuccess}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.greenPart}>
            <View style={{marginTop: 15}}>
                <DonationUnsuccessfulIcon/>
            </View>
            

            <Text style={styles.successHeader}>Not successful</Text>

            <Text style={styles.successStatement}>
                    You don’t have up to this on your wallet
                    please donate lesser or scan and convert 
                    more waste
            </Text>
           
            <TouchableOpacity style={styles.confirmButton} >
                <Text style={styles.confirmButtonText}>Donate lesser</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>{navigate.push("Home")}}>
                <Text style={styles.scanDirection}>Scan more waste</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}
export default DonationNotSuccessful;
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
        backgroundColor: "#FFFFFF",
        height: 280,
        width: "100%",
        borderRadius: 12,

    },
    successHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 24,
        lineHeight: 28,
        color: "#4B4B4B",       
    },
    successStatement:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        textAlign: "center",
        color: "#4B4B4B",
        width: "70%",
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
        marginTop: 15,
    },
    confirmButtonText:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 12,
        color: "#FFFFFF",
        padding: 4,
    },

    scanDirection:{
        color: "#4F9A51"
    }

})