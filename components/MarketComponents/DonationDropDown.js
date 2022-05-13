import { RotateWithOffset } from '@tensorflow/tfjs'
import React, {useState} from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native'
import ArrowBackwardLeftIcon from '../SVGComponents/ArrowBackwardLeftIcon'

// const selectionList =[
//     "WC 0 - 20k","WC 20 - 40k","WC 40 - 60k","WC 60 - 80k","WC 80 - 100k"
// ]

const DonationDropDown = (props) => {
    const {option,selected,setSelected,word,changeWord}=props

    const [isOpen,setIsOpen]=useState(false)

    const toggleOpen =()=>{
        setIsOpen(!isOpen)
    }

  return (
    <TouchableOpacity onPress={toggleOpen} style={styles.selectionButton}>
        <Text style={styles.selectionButtonText}>
           {selected} 
        </Text>
        <View style={styles.arrowConfig}><ArrowBackwardLeftIcon/></View> 

{isOpen && (<View style={styles.dropDownContent}>
            {option.map((option,index)=>(
                <>
                <Text
                    key={index}
                    onPress={()=>{
                        setSelected(option)
                        setIsOpen(false)
                    }}
                    style={styles.optionText}
                >
                    {option}
                </Text>
                <Text style={styles.lineBetween}></Text>
                </>
            ))}

            <TextInput
                style={styles.input}
                onChangeText={changeWord}
                value={word}
                placeholder="Type yours"
                placeholderTextColor="#4F9A51"
            />
            
        </View>)}
    </TouchableOpacity>
  )
}

export default DonationDropDown;
const styles = StyleSheet.create({
    selectionButton:{
        width: 307,
        height: 54,
        backgroundColor: "#E9FFEA",
        borderColor:"#FFFFFF",
        borderWidth: 1,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        borderRadius: 8,
        // position: 'relative',
    },
    selectionButtonText:{
        color: "#4F9A51",
        //  position: 'relative',
        //  width: "100%"
    },
    optionText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF",
        marginLeft: 10,
        paddingLeft: 20,
        // borderBottomColor: "#FFFFFF",
        // borderBottomWidth: 2,
        width: "90%",
        height: 15
    },

    lineBetween:{
        height: 1,
        backgroundColor: "#FFFFFF",
        width: "80%",
        marginLeft: 20,
    },
    
    input:{
        width: "90%",
        height: 40,
        backgroundColor: "#E9FFEA",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        color: "#4F9A51",
        padding: 10,
        marginLeft: 9,
        borderRadius: 8,
    },

    dropDownContent:{
        position: 'absolute',
        top: 0,
        width: 307,
        height: 204,
        backgroundColor: "#4F9A51",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        borderRadius: 6
    },

    arrowConfig:{
        // transform: rotate("-90deg"),
        transform: [{ rotate:'-90deg' }],
        position: "absolute",
        right: 20,
    }
 })