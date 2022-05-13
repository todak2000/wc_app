import React from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image,} from 'react-native';
import ErrorMessageIcon from '../SVGComponents/ErrorMessageIcon';
import TimesIcon from '../SVGComponents/TimesIcon';


const UnsuccessfulPurchase = (props) => {
    const{toggleUnSuccess}=props
     
  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleUnSuccess}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.greenPart}>
            <View style={{marginTop: 20}}>
                <ErrorMessageIcon/>
            </View>
            

            <Text style={styles.successHeader}>Unsuccessful Purchase</Text>

            <Text style={styles.successStatement}>
                You don’t have sufficient wastecoin to purchase
                this, please scan more waste and try again
                or check other products
            </Text>
           
            <TouchableOpacity style={styles.confirmButton} >
                <Text style={styles.confirmButtonText}>Go to market</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}
export default UnsuccessfulPurchase;
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
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgba(20, 98, 9, 1)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 250,
        width: "100%",
    },
    successHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#AC1225",       
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