import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'

 function ProfileHeader(props){

   const {name, textHeader, following, followers} = props
    return (
        <View style={styles.container}>
            <View style={styles.flexyTop}>
                <Text style={styles.textHeader}>{textHeader}</Text>
                <Ionicons name="settings-sharp" size={20} color="#fff" />
            </View>
            <TouchableOpacity style={styles.circle}>

            </TouchableOpacity>
            <Text style={styles.textHeader}> {name}</Text>
            <View style={styles.flexyCenter}>
                <View style={styles.viewCenter}>
                    <Text style={styles.textBig}>{following}</Text>
                    <Text style={styles.textMinor}> Following</Text>
                </View>
                <View style={styles.viewCenter}>
                    <Text style={styles.textBig}>{followers}</Text>
                    <Text style={styles.textMinor}> Followers</Text>
                </View>
                {/* <View style={styles.viewCenter}>
                    <Text style={styles.textBig}>{following}</Text>
                    <Text style={styles.textMinor}> Top recyclers</Text>
                </View> */}
            </View>
            {/* <View style={styles.flexyleft}>
                <Text style={styles.textTwo}>{textTwo}</Text>
                <Text style={styles.textBig}>{balance}</Text>
                
            </View>
             */}
        </View>
        
    )
}
export default ProfileHeader
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#4F9A51",
      padding:"5%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    viewCenter:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    circle:{
        width:100,
        height:100,
        borderRadius:60,
        backgroundColor:"#EFFFEC",
        marginTop:10,
        marginBottom:5,
    },
    flexyTop:{
        flexDirection:"row",
        marginTop:20,
        width:"100%",
        justifyContent:"space-between",
        // marginBottom:30,
    },
    flexyCenter:{
        flexDirection:"row",
        marginTop:20,
        width:"100%",
        justifyContent:"space-around",
        // marginBottom:30,
    },

    textHeader:{
      color:"#fff",
      fontSize: 18,
      fontFamily:'Rubik',
    },
    textMinor:{
        color:"#fff",
        fontSize: 10,
        fontFamily:'Rubik',
      },
      textBig:{
        color:"#fff",
        fontSize: 20,
        fontFamily:'Rubik',
        fontWeight:"bold"
      }
  });