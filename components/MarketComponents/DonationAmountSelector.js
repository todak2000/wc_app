import React,{useState} from 'react'
import { TouchableOpacity,StyleSheet, View, Text, Image,} from 'react-native';
import TimesIcon from '../SVGComponents/TimesIcon';
import DonationDropDown from './DonationDropDown';

const selectionOption =[
    "WC 35,000","WC 40,000","WC 60,000","WC 80,000","WC 100,000"
]

const DonationAmountSelector = (props) => {
    const{toggleChange,toggleSuccess,selected, setSelected}=props


    


  return (
    <View style={styles.modalCase}>
        <View style={styles.closeCase}>
            <TouchableOpacity style={styles.modalClose}  onPress={toggleChange}>
                <TimesIcon/>
            </TouchableOpacity>
        </View>
        <View style={styles.whitePart}>
            <View style={styles.whitePartTextHolder}>
                <Text style={styles.whitePartText}>
                    Make Donation
                </Text>
            </View>
            <DonationDropDown
                option={selectionOption}
                selected={selected}
                setSelected={setSelected}
            />
            <TouchableOpacity style={styles.confirmButton} onPress={toggleSuccess}>
                <Text style={styles.confirmButtonText}>Donation</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DonationAmountSelector;
const styles = StyleSheet.create({
    modalCase:{
        width: "100%",
        backgroundColor: "transparent",
        top: "50%",
        bottom: "50%",
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
    whitePart:{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        // borderTopLeftRadius: 12,
        // borderTopRightRadius: 12,
        borderRadius: 12,
        height: 265,
        width: "90%",
        paddingLeft: 20,
        paddingRight: 20,
    },

    whitePartTextHolder:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: "5%"
    },

    whitePartText:{
        fontFamily: 'Rubik',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 17,
        color: "#4F9A51",
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
        zIndex: -1
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