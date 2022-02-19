import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Camera} from 'expo-camera'
import { Snap } from '../actions/index';
import Bottle from './SVGComponents/Bottle';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as FileSystem from 'expo-file-system';
import AnimatedLoader from "react-native-animated-loader";
import Button from './AuthComponents/Button';
import Can from './SVGComponents/Can';
import * as ImageManipulator from 'expo-image-manipulator';

const Clarifai = require('clarifai');
const clarifai_api_key = "eb2ca7aa410440d897c2a46fc3a07243";
const clarifai = new Clarifai.App({
 apiKey: clarifai_api_key
});
process.nextTick = setImmediate;

 function CameraScreen(props){
  const {navigation, snapApi, user} = props;
  const [loading, setLoading] = useState(false);
  const [suceed, setSuceed] = useState(false);
  const [fail, setFail] = useState(false);
  const [mesg, setMesg] = useState("");
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [name, setName] = useState("");
  const [initiateError,setInitiateError]= useState(false);

  
  let camera: Camera
  const resize = async photo => {
    let manipulatedImage = await ImageManipulator.manipulateAsync(
      photo,
      [{ resize: { height: 300, width: 300 } }],
      { base64: true }
    );
    return manipulatedImage.base64;
  };

  const predict = async image => {
    let predictions = await clarifai.models.predict(
      Clarifai.GENERAL_MODEL,
      image
    );
    // console.log(predictions.outputs[0].data.concepts)
    return predictions;
  };
  const payUser = async (name)=>{
    // setName(name)
    const data = {
      user_id: user.user_id,

    }
    snapApi(data).then(res=>{
      if (res){
        if (res.success === true && res.status === 200){
          
          setSuceed(true)
          setFail(fail)
          setMesg(res.message)
          
          setLoading(false);
          return true
          
        }
        else{
          
          if (res.message){
            setError(res.message)
          }
          else{
            setError("Sorry! an error Occured.")
          }
          setFail(true)
          setSuceed(fail)
          setLoading(false);
        }
      }
    })
  }

  const __takePicture = async () => {
    setLoading(true)
    if (!camera) return
    const options = { quality: 1, base64: true, exif:true };
    const photo = await camera.takePictureAsync(options)
    // console.log(photo.uri)
    if(photo){
      setLoading(false)
      setSuceed(true)
      setPhotos(photo)
      let resized = await resize(photo.uri);
      let predictionss = await predict(resized);
      let z  = predictionss.outputs[0].data.concepts
      if (z.filter((item) => item.name == 'bottle' || item.name == 'can').length > 0) {
        z.filter((item) => item.name == 'bottle' || item.name == 'can').map(({name}) => {setName(name);payUser()})
      }
      else{
        setSuceed(false)
        setLoading(false);
        setError("Sorry! we are certain the item is not recyclable")
        setFail(true)
      }
      
     
    }
    
   
  }
    return (
      <View style={styles.container}>
        {
          photos !== null ?
           <ImageBackground
            source={{uri: photos.uri}}
            style={{
              flex: 1,
            }}
          />
        :
        <Camera
              style={{flex: 1,width:"100%"}}
              ref={(r) => {
                camera = r
              }}
          ></Camera>
          
        }
          <View style={styles.top}>
              {!loading &&
                <TouchableOpacity
                  onPress={()=>{navigation.navigate("Scanner")}}
                >
                <Text style={styles.topText}>Cancel</Text>
                </TouchableOpacity>
              }
          </View>
          <AnimatedLoader
            visible={loading}
            color="#44BC48"
            overlayColor="#DEEBE9"
            animationStyle={styles.lottie}
            source={require("../assets/recycle.json")}
            speed={1}
          >
            <Text >Identifying the item...</Text>
          </AnimatedLoader>

          <View style={styles.bottom}>
              {!loading && !suceed && !fail &&
                <TouchableOpacity
                onPress={__takePicture}
              >
                <MaterialIcons name="motion-photos-on" size={70} color="#fff" /> 
              </TouchableOpacity>
              }
              {suceed && name !="" &&
                (
                  <View style={styles.bottomInners}>
                  <Ionicons name="checkmark-done-circle" size={70} color="#24D29E" /> 
                  <Text style={{color:"#24D29E", textAlign:"center", marginTop:30, fontFamily:"Rubik"}}>{mesg} for scanning a recyclable {name}</Text>
                  <View style={{display:"flex", flexDirection: "column", justifyContent:"center", alignContent:"center", margin:30}} >
                    {name === "bottle" ? <Bottle /> :<Can /> }
                  </View>
                </View>
                )
              }
              {fail && error != "" &&
                <View style={styles.bottomInner}>
                  <MaterialIcons name="cancel" size={70} color="#FF4900" /> 
                  <Text style={{color:"#FF4900", textAlign:"center", marginTop:30, fontFamily:"Rubik"}}>{error}</Text>
                </View>
              }
              {/* {loading && } */}
              {fail && <Button buttonText="Scan Again" onPress={()=>{setFail(false); setPhotos(null)}}/>}
              {suceed && name !="" && <Button buttonText="Check Wallet" onPress={()=>{navigation.navigate("Wallet")}}/>}
              
          </View>
          
        </View>
    )  
}

// export default CameraScreen
function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    snapApi: bindActionCreators(Snap, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CameraScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bottomInner:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:30,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      backgroundColor:"#fff",
      width:"100%",
      marginBottom:-20,
    },
    bottomInners:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding:30,
      width:"100%",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      marginBottom:-20,
      backgroundColor:"#fff",
      
    },
    bottom:{
      position:"absolute",
      width:"100%",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      paddingBottom:100,
      bottom:0,
      width:"100%",
      // backgroundColor:"#ff0",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    },
    topText:{
      fontFamily:"Rubik",
      fontSize:20,
      fontWeight:"bold",
      marginRight:20,
      color:"#FF4900"
    },
    progress:{
      color:"#44BC48",
      fontFamily:"Rubik",
      fontSize:20,
      fontWeight:"bold",
    },
    top:{
      width:"100%",
      position:"absolute",
      top:50,
      flexDirection:"row",
      justifyContent:"flex-end",
      zIndex:1000,
    },
    lottie: {
      width: 100,
      height: 100,
    },
  });