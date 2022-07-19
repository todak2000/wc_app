import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import Button from './AuthComponents/Button'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import ScannerGreen from './TabComponents/ScannerGreen'
import ScannerSVG from '../components/SVGComponents/ScannerSVG'
import {Camera} from 'expo-camera'

 function ScannerScreen(props){
  const {navigation,} = props;
  
  // const [startCamera,setStartCamera] = React.useState(false)
  // let camera: Camera
  const __startCamera = async () => {
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      // setStartCamera(true)
      navigation.navigate("Camera")
    } else {
      Alert.alert('Access denied')
    }
  }

    return (
      <View style={styles.container}>
            {/* <View style={styles.flexyEnd}>
              <View style={styles.flexyInnerGreen}>
                <Text style={styles.flexyText2}>WC150</Text>
              </View>
              <View style={styles.flexyInnerGreen}>
                <Text style={styles.flexyText2}> <MaterialCommunityIcons name="recycle-variant" size={18} color="#146209"  onPress={()=>console.log("hi press me")}/>  250  <Ionicons name="chevron-forward" size={18} color="#146209"  onPress={()=>console.log("hi press me")}/></Text>
              </View>
            </View> */}


            <View style={styles.flexy}>
              <View style={styles.flexyInner}>
                <ScannerGreen />
                <Text style={styles.flexyText}>Place Item properly for capture</Text>
              </View>
            </View>
            <ScannerSVG />
            {/* <View style={styles.lower}>
              <View style={styles.flexyLower}>
                <Ionicons name="checkbox-outline" size={20} color="#87DC7A" /> 
                <Text style={styles.textLower}>Please stay in an open environment</Text>
              </View>
              <View style={styles.flexyLower}>
                <Ionicons name="checkbox-outline" size={20} color="#87DC7A" /> 
                <Text style={styles.textLower}>Keep vibration to minimum</Text>
              </View>
              <View style={styles.flexyLower}>
                <Ionicons name="checkbox-outline" size={20} color="#87DC7A" /> 
                <Text style={styles.textLower}>Ensure good ventilation</Text>
              </View>
            </View> */}
            <Button buttonText="Snap Now" onPress={__startCamera} />
          {/* </View>
          } */}
        </View>
    )  
}
export default ScannerScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"10%",
      alignItems:"center",
      justifyContent:"center",
    },
    flexy:{
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#D2FFCB",
      width:"100%",
      padding:"5%",
      paddingLeft:"10%",
      paddingRight:"10%"
    },

    flexyInnerGreen:{
      justifyContent:"space-around",
    },
    lower:{
      // padding:"10%",
    },
    flexyEnd:{
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      marginBottom:"10%"
    },
    textLower:{
      marginLeft:10,
      fontFamily:"Rubik",
      fontSize:15,
      // fontWeight:"bold",
    },
    flexyLower:{
      flexDirection:"row",
      justifyContent:"flex-start",
      width:"100%",
      alignItems:"center",
      marginBottom:"10%"
    },
    flexyInner:{
      flexDirection:"row",
      
    },
    flexyText:{
      marginLeft:10,
      color:"#146209",
      fontFamily:"Rubik",
      fontSize:15,
      // fontWeight:"bold",
    },
    flexyText2:{
      padding:"2%",
      paddingLeft:"4%",
      paddingRight:"4%",
      borderRadius:5,
      fontSize:20,
      fontWeight:"bold",
      backgroundColor:"#D2FFCB",
      color:"#146209",
      fontFamily:"Rubik"
    }
  });