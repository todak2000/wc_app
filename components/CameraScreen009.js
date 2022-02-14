import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Camera} from 'expo-camera'
import { Snap,  getImageUrl } from '../actions/index';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as FileSystem from 'expo-file-system';
import Button from './AuthComponents/Button';
import * as ImageManipulator from 'expo-image-manipulator';

const Clarifai = require('clarifai');
const clarifai_api_key = "eb2ca7aa410440d897c2a46fc3a07243";
const clarifai = new Clarifai.App({
 apiKey: clarifai_api_key
});
process.nextTick = setImmediate;

 function CameraScreen(props){
  const {navigation, snapApi, getSnapResultApi, getImageUrlApi, user_id} = props;
  const [loading, setLoading] = useState(false);
  const [suceed, setSuceed] = useState(false);
  const [fail, setFail] = useState(false);
  const [mesg, setMesg] = useState("");
  const [photos, setPhotos] = useState(null);
  const [predictions, setPredictions] = useState([]);
  // console.log(props)

const result = ()=>{
  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": "todak2000",
        "app_id": "f20772f672cb43dd8bc94d8051055ea1"
    },
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://ik.imagekit.io/fknrvbf6xta/tr:n-media_library_thumbnail/recyc_LLUDOvKBy0S.jpg"
          // "url": photo.base64
        }
      }
    }
  ]
  });
  
  const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Key ${clarifai_api_key}`
  },
  body: raw
  };
  
  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id
  
  fetch("https://api.clarifai.com/v2/models/general-image-detection/versions/3df9e7b5c0f74a369919f6c0227afa08/outputs", requestOptions)
  .then(response => response.text())
  .then(result => console.log("_________result_____", result))
  .catch(error => console.log('error', error));
}
  
  let camera: Camera
  

  const __takePicture = async () => {
    setLoading(true)
    if (!camera) return
    const options = { quality: 1, base64: true, exif:true };
    const photo = await camera.takePictureAsync(options)
    // console.log(photo.base64)
    if(photo){
 
      // setLoading(false)
      setPhotos(photo)
      let x = photo.uri

      
      // result()

      let filename = x.split('/').pop();
      // console.log(filename)
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // Upload the image using the fetch and FormData APIs
      let formData = new FormData();
      // Assume "photo" is the name of the form field the server expects
      formData.append('photo', { uri: x , name: filename, type });
      formData.append('user_id', props.user.user_id)
      
      // getSnapResultApi(x)
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error));





      getImageUrlApi(formData).then(res=>{
        
        if (res){
          setLoading(false);
          console.log(res)
          if (res.success === true && res.status === 200){
            const clariResult = result(res.imgURL)
            console.log(clariResult)
            // setLoading(false);
            // setSuceed(true)
            // setMesg(res.message)
            
          }
          else{
            setLoading(false);
            if (res.message){
              setMesg(res.message)
            }
            else{
              setMesg("Sorry! an error Occured.")
            }
            setFail(true)
          }
        }
      })
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
          <Spinner visible={loading} color="#44BC48"/>
          <View style={styles.bottom}>
              {!loading && !suceed && !fail &&
                <TouchableOpacity
                onPress={__takePicture}
              >
                <MaterialIcons name="motion-photos-on" size={70} color="#fff" /> 
              </TouchableOpacity>
              }
              {suceed && 
                <View style={styles.bottomInners}>
                  <Ionicons name="checkmark-done-circle" size={70} color="#24D29E" /> 
                  <Text style={{color:"#24D29E", textAlign:"center", marginTop:30, fontFamily:"Rubik"}}>{mesg}</Text>
                  {predictions &&
                  predictions.map(prediction=>(
                    <Text key={`${prediction.name} ${prediction.value}`}>{`${prediction.name} ${prediction.value}`}</Text>
                  ))
                  }
                </View>
              }
              {fail && 
                <View style={styles.bottomInner}>
                  <MaterialIcons name="cancel" size={70} color="#FF4900" /> 
                  <Text style={{color:"#FF4900", textAlign:"center", marginTop:30, fontFamily:"Rubik"}}>{mesg}</Text>
                </View>
              }
              {loading && <Text style={styles.progress}>Identifying the item...</Text>}
              {fail && <Button buttonText="Scan Again" onPress={()=>{setFail(false); setPhotos(null)}}/>}
              {suceed && <Button buttonText="Check Wallet" onPress={()=>{navigation.navigate("Wallet")}}/>}
              
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
    snapApi: bindActionCreators(Snap, dispatch),
    getImageUrlApi: bindActionCreators(getImageUrl, dispatch)
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
    }
  });