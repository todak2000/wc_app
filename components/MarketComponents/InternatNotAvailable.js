import React from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image,} from 'react-native';
import TimesIcon from '../SVGComponents/TimesIcon';


const InternetNotAvailable = (props) => {
    const{toggleUnSuccess}=props
     
  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleUnSuccess}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.greenPart}>
            <Text style={styles.successHeader}>You are offline! please reconnect</Text>

            <Text style={styles.successStatement}>
                It will reconnect automatically, once your 
                connection is on
            </Text>
        </View>
    </View>
  )
}
export default InternetNotAvailable;
const styles = StyleSheet.create({
 modalCase:{
        width: "90%",
        backgroundColor: "transparent",
        top: "5%",
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
        backgroundColor: "#B53333",
        height: 70,
        width: "100%",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        padding: 13,
    },

    successHeader:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 17,
        color: "#FFFFFF",       
    },

    successStatement:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 12,
        textAlign: "center",
        color: "#FFFFFF",
        width: "70%",
    },
  
})