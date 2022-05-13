import React, {useState} from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native'

// const selectionList =[
//     "WC 0 - 20k","WC 20 - 40k","WC 40 - 60k","WC 60 - 80k","WC 80 - 100k"
// ]

const FilterDropDown = (props) => {
    const {option,selected,setSelected,word,changeWord}=props

    const [isOpen,setIsOpen]=useState(false)

    const toggleOpen =()=>{
        setIsOpen(!isOpen)
    }

  return (
    <TouchableOpacity onPress={toggleOpen} style={styles.selectionButton}>
        <Text style={styles.selectionButtonText}>
            Press
        </Text>

{isOpen && (<View style={styles.dropDownContent}>
            {option.map((option,index)=>(
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
            ))}

            <TextInput
                style={styles.input}
                onChangeText={changeWord}
                value={word}
                placeholder="Type yours"
                placeholderTextColor="#FFFFFF"
            />
            
        </View>)}
    </TouchableOpacity>
  )
}

export default FilterDropDown;
const styles = StyleSheet.create({
    selectionButton:{
        width: 103,
        height: 26,
        backgroundColor: "#87DC7A",
        borderColor:"#FFFFFF",
        borderWidth: 1,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        
    },
    selectionButtonText:{
        color:"#FFFFFF"
    },
    optionText:{
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 14,
        color: "#FFFFFF",
        marginLeft: 20,
    },
    
    input:{
        width: 121,
        height: 30,
        backgroundColor: "#4F9A51",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        color: "#FFFFFF",
        padding: 10,
        marginLeft: 9,
    },
    dropDownContent:{
        position: 'absolute',
        top: 0,
        width: 139,
        height: 140,
        backgroundColor: "#87DC7A",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
 })