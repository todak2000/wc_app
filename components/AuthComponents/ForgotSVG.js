import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, G, FeBlend,FeFlood,FeGaussianBlur,Filter, Defs, FeComposite} from 'react-native-svg';

 function ForgotSVG(){
    return (

        <View style={styles.container}>
             <Svg width="176" height="176" viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M129 87V53.5C129 39.033 129 31.7995 126.202 26.2663C123.7 21.3187 119.681 17.3004 114.734 14.7983C109.201 12 101.967 12 87.5 12V12C73.033 12 65.7995 12 60.2663 14.7983C55.3187 17.3004 51.3004 21.3187 48.7983 26.2663C46 31.7995 46 39.033 46 53.5V87" stroke="#1B660C" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"/>
              <G filter="url(#filter0_b_109_1830)">
              <Path fillRule="evenodd" clipRule="evenodd" d="M16.5356 60.0051C11.9987 64.0103 11.1645 70.6838 9.49609 84.0309L2.49609 140.031C0.400521 156.795 -0.647262 165.178 4.12961 170.589C8.90649 176 17.354 176 34.249 176H141.751C158.646 176 167.093 176 171.87 170.589C176.647 165.178 175.599 156.795 173.504 140.031L166.504 84.0309C164.835 70.6838 164.001 64.0103 159.464 60.0051C154.927 56 148.202 56 134.751 56H41.249C27.798 56 21.0726 56 16.5356 60.0051ZM98.2436 113.244C98.2436 116.717 96.5151 119.787 93.8714 121.639C93.9227 121.758 93.9685 121.881 94.0085 122.007L97.4387 132.787C98.2595 135.367 96.3342 138 93.627 138H82.3725C79.6653 138 77.7399 135.367 78.5608 132.787L81.9909 122.007C82.0309 121.881 82.0767 121.758 82.128 121.639C79.4843 119.787 77.7558 116.717 77.7558 113.244C77.7558 107.586 82.3422 103 87.9997 103C93.6573 103 98.2436 107.586 98.2436 113.244Z" fill="#FBF1FF" fillOpacity="1.08"/>
              </G>
  
              </Svg>


        </View>
        
    )
}
export default ForgotSVG
const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:40,
    },
  });