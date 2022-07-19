import React from 'react'
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native'
import Svg, { Path, Circle, Rect} from 'react-native-svg';

 function BottomComponent(props){
  const {navigation, navText} = props;
    return (

        <View style={styles.container}>
          <View>
            {
              navText =="OnboardingTwo" && 
              <Svg width="86" height="7" viewBox="0 0 86 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect width="54" height="7" rx="3.5" fill="#87DC7A"/>
                <Rect x="63" width="7" height="7" rx="3.5" fill="#D7F4D2"/>
                <Rect x="79" width="7" height="7" rx="3.5" fill="#D7F4D2"/>
              </Svg>
              // <Svg width="80" height="7" viewBox="0 0 80 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              //   <Rect x="13" width="54" height="7" rx="3.5" fill="#87DC7A"/>
              //   <Rect width="7" height="7" rx="3.5" fill="#D7F4D2"/>
              //   <Rect x="73" width="7" height="7" rx="3.5" fill="#D7F4D2"/>
              // </Svg>
            }
            {
              navText =="OnboardingThree" &&
              <Svg width="80" height="7" viewBox="0 0 80 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect x="13" width="54" height="7" rx="3.5" fill="#87DC7A"/>
                <Rect width="7" height="7" rx="3.5" fill="#D7F4D2"/>
                <Rect x="73" width="7" height="7" rx="3.5" fill="#D7F4D2"/>
              </Svg>

              

            }
            {
              navText =="SignIn" &&
              <Svg width="80" height="7" viewBox="0 0 80 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect x="26" width="54" height="7" rx="3.5" fill="#87DC7A"/>
                <Rect width="7" height="7" rx="3.5" fill="#D7F4D2"/>
                <Rect x="13" width="7" height="7" rx="3.5" fill="#D7F4D2"/>
              </Svg>
            }
            

            
          </View>
          <View>
            <TouchableOpacity 
              style={styles.container}
              onPress={()=>navigation.navigate(navText)}
           >
            <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Circle cx="32" cy="32" r="32" fill="#4F9A51"/>
              <Path fillRule="evenodd" clipRule="evenodd" d="M21.5067 31.0956H18.906C18.4056 31.0956 18 31.5013 18 32.0016C18 32.5018 18.4056 32.9076 18.906 32.9076H21.5067V31.0956ZM29.2214 32.9076H40.9997L33.3761 37.3092C32.9427 37.5595 32.7942 38.1135 33.0445 38.5468C33.2124 38.8375 33.5168 39 33.8299 39C33.9835 39 34.1394 38.9607 34.2821 38.8784L44.8369 32.7845C45.1172 32.6227 45.2899 32.3235 45.2899 31.9999C45.2899 31.6763 45.1172 31.3771 44.8369 31.2153L34.2821 25.1215C33.8487 24.8714 33.2947 25.0198 33.0445 25.4531C32.7942 25.8864 32.9428 26.4405 33.3761 26.6907L41.0057 31.0956H29.2214V32.9076Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
          </View>
        </View>
        
    )
}
export default BottomComponent
const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      
    },
  });