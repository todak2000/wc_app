import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, ClipPath, Rect, G, FeBlend,FeFlood,FeGaussianBlur,Filter, Defs, FeComposite} from 'react-native-svg';

 function FriendSVG(){
    return (

        <View style={styles.container}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_109_4163)">
            <Path d="M22.125 10.8281C21.876 10.8281 21.6361 10.8675 21.4109 10.9398C20.9342 10.5192 20.403 10.1807 19.8338 9.93094C20.9115 9.11737 21.6094 7.8262 21.6094 6.375C21.6094 3.91955 19.6117 1.92188 17.1562 1.92188C14.7008 1.92188 12.7031 3.91955 12.7031 6.375C12.7031 7.55259 13.1628 8.62472 13.9118 9.42188H10.0882C10.8372 8.62472 11.2969 7.55259 11.2969 6.375C11.2969 3.91955 9.2992 1.92188 6.84375 1.92188C4.3883 1.92188 2.39062 3.91955 2.39062 6.375C2.39062 7.8262 3.08855 9.11737 4.1662 9.93089C3.59705 10.1807 3.06577 10.5191 2.58914 10.9397C2.36386 10.8675 2.124 10.8281 1.875 10.8281C0.841125 10.8281 0 11.6693 0 12.7031V14.8125C0 15.1358 0.218484 15.4074 0.515625 15.4896V21.375C0.515625 21.7633 0.830437 22.0781 1.21875 22.0781H22.7812C23.1696 22.0781 23.4844 21.7633 23.4844 21.375V15.4896C23.7815 15.4074 24 15.1358 24 14.8125V12.7031C24 11.6693 23.1589 10.8281 22.125 10.8281ZM22.5938 12.7031V14.1094H22.125C21.6081 14.1094 21.1875 13.6888 21.1875 13.1719C21.1875 12.6549 21.6081 12.2344 22.125 12.2344C22.3835 12.2344 22.5938 12.4447 22.5938 12.7031ZM14.1094 6.375C14.1094 4.69495 15.4762 3.32812 17.1562 3.32812C18.8363 3.32812 20.2031 4.69495 20.2031 6.375C20.2031 8.05505 18.8363 9.42188 17.1562 9.42188C15.4762 9.42188 14.1094 8.05505 14.1094 6.375ZM6.84375 3.32812C8.5238 3.32812 9.89062 4.69495 9.89062 6.375C9.89062 8.05505 8.5238 9.42188 6.84375 9.42188C5.1637 9.42188 3.79688 8.05505 3.79688 6.375C3.79688 4.69495 5.1637 3.32812 6.84375 3.32812ZM1.40625 12.7031C1.40625 12.4447 1.61653 12.2344 1.875 12.2344C2.39194 12.2344 2.8125 12.6549 2.8125 13.1719C2.8125 13.6888 2.39194 14.1094 1.875 14.1094H1.40625V12.7031ZM1.92188 15.5145C3.19261 15.4893 4.21875 14.4485 4.21875 13.1719C4.21875 12.6557 4.0507 12.1783 3.76692 11.7907C4.57992 11.166 5.56739 10.8281 6.60938 10.8281C9.19406 10.8281 11.2969 12.9309 11.2969 15.5156V20.6719H5.20312V17.625C5.20312 17.2367 4.88831 16.9219 4.5 16.9219C4.11169 16.9219 3.79688 17.2367 3.79688 17.625V20.6719H1.92188V15.5145ZM20.2031 20.6719V17.625C20.2031 17.2367 19.8883 16.9219 19.5 16.9219C19.1117 16.9219 18.7969 17.2367 18.7969 17.625V20.6719H12.7031V15.5156C12.7031 13.6328 11.8447 11.9468 10.4987 10.8281H17.3906C18.4326 10.8281 19.4201 11.166 20.2331 11.7907C19.9493 12.1783 19.7812 12.6557 19.7812 13.1719C19.7812 14.4485 20.8074 15.4893 22.0781 15.5145V20.6719H20.2031Z" fill="white"/>
            </G>
            <Defs>
            <ClipPath id="clip0_109_4163">
            <Rect width="24" height="24" fill="white"/>
            </ClipPath>
            </Defs>
          </Svg>

        </View>
        
    )
}
export default FriendSVG
const styles = StyleSheet.create({
    container: {
      margin:20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });