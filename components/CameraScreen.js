import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity, ImageBackground} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import {Camera} from 'expo-camera'
import { Snap } from '../actions/index';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as FileSystem from 'expo-file-system';
import Button from './AuthComponents/Button';
 function CameraScreen(props){
  const {navigation, snapApi, user_id} = props;
  const [loading, setLoading] = useState(false);
  const [suceed, setSuceed] = useState(false);
  const [fail, setFail] = useState(false);
  const [mesg, setMesg] = useState("");
  const [photos, setPhotos] = useState(null);
  // console.log(props)
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
      
      snapApi(formData).then(res=>{
        if (res){
          if (res.success === true && res.status === 200){
            setLoading(false);
            setSuceed(true)
            setMesg(res.message)
            
          }
          else{
            setLoading(false);
            setMesg(res.message)
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
                </View>
              }
              {fail && 
                <View style={styles.bottomInner}>
                  <MaterialIcons name="cancel" size={70} color="#FF4900" /> 
                  <Text style={{color:"#FF4900", textAlign:"center", marginTop:30, fontFamily:"Rubik"}}>{mesg}</Text>
                </View>
              }
              {loading && <Text style={styles.progress}>Scanning in Progress...</Text>}
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
    }
  });