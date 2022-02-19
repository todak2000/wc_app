import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const ButtonComponent = (props) => {
    const { name, onPress, backgroundColor, color}=props;
    return (
        <>
        <TouchableOpacity 
        style={[styles.presser, { backgroundColor}]}
        // style={styles.presser}
        onPress={onPress}
        >
          <Text style={[styles.name,{color}]}>{name}</Text>  
        </TouchableOpacity>
            
        </>
    )
}

export default ButtonComponent
 const styles = StyleSheet.create({
    presser:{
        backgroundColor: "#D2FFCB",
        // color: "#D2FFCB",
        // width: 200,
        // height: 40,
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
    },
    name:{
        fontSize: 16,
        fontFamily: "rubik",

    }

 });
