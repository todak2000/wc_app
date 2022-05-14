import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {FontAwesome5, Ionicons} from '@expo/vector-icons'

 function ProfileHeader(props){

   const {name, textHeader, following, followers, navigation, navigation2} = props
    return (
        <View style={styles.container}>
            <View style={styles.flexyTop}>
                <Text style={styles.textHeader}>{textHeader}</Text>
                <Ionicons name="settings-sharp" size={20} color="#fff" />
            </View>
            <TouchableOpacity style={styles.circle} onPress={navigation2}>
            <Ionicons name="person-sharp" size={50} color="#87DC7A" />
            {/* <Ionicons name="camera" size={30} color="#87DC7A" /> */}
            </TouchableOpacity>
            <Text style={styles.textHeader}> {name}</Text>
            {/* <View style={styles.flexyCenter}>
                <View style={styles.viewCenter}>
                    <Text style={styles.textBig}>{followers}</Text>
                    <Text style={styles.textMinor}> Followers</Text>
                </View>
            </View> */}
            {followers > 0?
            <TouchableOpacity style={styles.friendDiv} onPress={navigation}>
                <View style={styles.friendInner}>
                <Ionicons name="person-circle-sharp" size={30} color="#fff" />
                <Ionicons name="person-circle-sharp" size={30} color="#fff" style={styles.icon} />
                <Ionicons name="person-circle-sharp" size={30} color="#fff" style={styles.icon} />
                    <Text style={styles.friendText}>View your {followers} Recycling followers</Text>
                </View>
                <Ionicons name="chevron-forward" size={25} color="#fff" />
            </TouchableOpacity>
            :
            <View style={styles.friendDiv} >
                <Ionicons name="person-circle-sharp" size={30} color="#FF490090" />
                <Text style={styles.friendText}>You have no one following you yet!</Text>
            </View>
            }
        </View>
        
    )
}
export default ProfileHeader
const styles = StyleSheet.create({
    container: {
      width:"100%",
      backgroundColor:"#146209",
      padding:"5%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    },
    icon:{
        marginLeft:-15,
    },
    friendText:{
        fontSize:12,
        color:"#146209",
        marginLeft:10,
        marginRight:30
    },
    friendInner:{
        // backgroundColor:"#87DC7A",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        alignContent:"center",
    },
    friendDiv:{
        backgroundColor:"#87DC7A",
        flexDirection:"row",
        padding:"3%",
        marginBottom:-40,
        borderRadius:40,
        marginTop:10,
        alignItems:"center",
        alignContent:"center",
        justifyContent:"space-between"
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
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    circlesmall:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:"red",
        // marginTop:10,
        // marginBottom:5,
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
      fontSize: 15,
      fontFamily:'Rubik700',
    },
    textMinor:{
        color:"#fff",
        fontSize: 10,
        fontFamily:'Rubik',
      },
      textBig:{
        color:"#fff",
        fontSize: 25,
        fontFamily:'Rubik700',
        // fontWeight:"bold"
      }
  });