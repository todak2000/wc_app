import React, { useEffect, useState , useRef} from 'react';
import { Dimensions, LogBox, Platform, StyleSheet, Text, View } from 'react-native';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import { StatusBar } from 'expo-status-bar';
import {Camera} from 'expo-camera'
import { Snap } from '../actions/index';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cocoSsd from '@tensorflow-models/coco-ssd'
import * as tf from '@tensorflow/tfjs';
import Canvas from 'react-native-canvas';

const TensorCamera = cameraWithTensors(Camera)

const {width, height} = Dimensions.get('window');

// LogBox.ignoreAllLogs(true);

function CameraScreen(props){
  const [model, setModel] = useState();
  let context = useRef()
  let canvas = useRef()
  const {navigation, snapApi, user} = props;
  let textureDims = Platform.OS == 'ios' ? {height:1200, width:1600} : {height:1200, width:1600}

  const handleCameraStream = (images)=>{
    const loop = async ()=>{
      const nextImageTensor = images.next().value
      if (!model || !nextImageTensor)
        throw new Error('No model or image tensor')
      model.detect(nextImageTensor).then((prediction)=>{
        drawRectangle(prediction, nextImageTensor);
      }).catch((error)=>{
        console.log(error);
      })
      requestAnimationFrame(loop)
    };
    loop();
  }

  const drawRectangle = (predictions,nextImageTensor)=>{
    if (!context.current || !canvas.current) return;

    const scaleWidth = width / nextImageTensor.shape[1];
    const scaleHeight = height / nextImageTensor.shape[0];

    const flipHorizontal  =  Platform.OS == 'ios' ? false : true;

    context.current.clearRect(0,0, width, height);

    for (const prediction of predictions){
      const [x,y,width,height] = prediction.bbox;
      const boundingBoxX = flipHorizontal ?
      canvas.current.width - x * scaleWidth - width * scaleWidth
      :
      x * scaleWidth

      const boundingBoxY = y * scaleHeight;

      context.current.strokeRect(boundingBoxX, boundingBoxY, width*scaleWidth, height*scaleHeight);
      context.current.strokeText(prediction.class, boundingBoxX - 5, boundingBoxY - 5);

    }

  }
  const handleCanvas = (can)=>{
    if (can){
      can.width = width;
      can.height = height;
      const ctx = can.getContext('2d');
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
      ctx.lineWidth = 3;

      context.current = ctx;
      canvas.current = can;
    }
  }

  useEffect(()=>{
    (async ()=>{
      const {status} = await Camera.requestCameraPermissionsAsync();
      await tf.ready();
      setModel(await cocoSsd.load())
      console.log(model)
    })();
  },[])
  return (
    <View style={styles.container}>
      <TensorCamera 
        style={styles.camera}
        type={Camera.Constants.Type.back}
        cameraTextureHeight={textureDims.height}
        cameraTextureWidth={textureDims.width}
        resizeDepth={3}
        resizeHeight={200}
        resizeWidth={152}
        onReady={handleCameraStream}
        autorender={true}
        useCustomShadersToResize={false}
      />
      <Canvas style={styles.canvas} ref={handleCanvas}/>
    </View>
  )
}


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
    backgroundColor:'#fff',
  },
  camera:{
    width: '100%',
    height:'100%',
  },
  canvas:{
    position:'absolute',
    zIndex:100000,
    width: '100%',
    height:'100%',
  }
})