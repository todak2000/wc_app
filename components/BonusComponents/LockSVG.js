import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, Circle, G, FeBlend,FeFlood,FeGaussianBlur,Filter, Defs, FeComposite} from 'react-native-svg';

 function LockSVG(){
    return (

        <View style={styles.container}>
          <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="21" cy="21" r="21" fill="#F3DEBA"/>
            <Path d="M26.8333 16.6667V15.8334C26.8333 12.6175 24.2167 10 21 10C17.7833 10 15.1667 12.6175 15.1667 15.8333V16.6666C13.7883 16.6666 12.6667 17.7883 12.6667 19.1666V27.5C12.6667 28.8783 13.7883 30 15.1667 30H26.8333C28.2117 30 29.3333 28.8783 29.3333 27.5V19.1667C29.3333 17.7883 28.2117 16.6667 26.8333 16.6667ZM16.8333 15.8333C16.8333 13.5358 18.7025 11.6666 21 11.6666C23.2975 11.6666 25.1667 13.5358 25.1667 15.8333V16.6666H16.8333V15.8333ZM27.6667 27.5C27.6667 27.96 27.2925 28.3333 26.8333 28.3333H15.1667C14.7075 28.3333 14.3333 27.96 14.3333 27.5V19.1667C14.3333 18.7067 14.7075 18.3334 15.1667 18.3334H26.8333C27.2925 18.3334 27.6667 18.7067 27.6667 19.1667V27.5Z" fill="#6D6D6D"/>
            <Path d="M21 19.5833C19.6217 19.5833 18.5 20.705 18.5 22.0833C18.5 23.1683 19.1992 24.085 20.1667 24.43V25.8333C20.1667 26.2941 20.54 26.6666 21 26.6666C21.46 26.6666 21.8333 26.2941 21.8333 25.8333V24.43C22.8008 24.085 23.5 23.1683 23.5 22.0833C23.5 20.705 22.3783 19.5833 21 19.5833ZM21 22.9167C20.5408 22.9167 20.1667 22.5434 20.1667 22.0834C20.1667 21.6234 20.5408 21.25 21 21.25C21.4592 21.25 21.8333 21.6233 21.8333 22.0833C21.8333 22.5433 21.4592 22.9167 21 22.9167Z" fill="#6D6D6D"/>
          </Svg>
        </View>
        
    )
}
export default LockSVG
const styles = StyleSheet.create({
    container: {
      // margin:30,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });