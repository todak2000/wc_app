import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, G, Defs, Rect, ClipPath} from 'react-native-svg';

 function MarketPlaceWhite(){
    return (

        <View style={styles.container}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G ClipPath="url(#clip0_345_986)">
            <Path d="M21.5 13C21.224 13 21 12.776 21 12.5V8.5C21 8.224 21.224 8 21.5 8C21.776 8 22 8.224 22 8.5V12.5C22 12.776 21.776 13 21.5 13Z" fill="#D0D2D0"/>
            <Path d="M2.5 20C2.224 20 2 19.776 2 19.5V8.5C2 8.224 2.224 8 2.5 8C2.776 8 3 8.224 3 8.5V19.5C3 19.776 2.776 20 2.5 20Z" fill="#D0D2D0"/>
            <Path d="M10.5 20H0.5C0.224 20 0 19.776 0 19.5C0 19.224 0.224 19 0.5 19H10.5C10.776 19 11 19.224 11 19.5C11 19.776 10.776 20 10.5 20Z" fill="#D0D2D0"/>
            <Path d="M20.75 9C18.958 9 17.5 7.542 17.5 5.75V0.5C17.5 0.224 17.724 0 18 0H21.5C22.879 0 24 1.122 24 2.5V5.75C24 7.542 22.542 9 20.75 9ZM18.5 1V5.75C18.5 6.991 19.51 8 20.75 8C21.99 8 23 6.991 23 5.75V2.5C23 1.673 22.327 1 21.5 1H18.5Z" fill="#D0D2D0"/>
            <Path d="M15 9C13.07 9 11.5 7.43 11.5 5.5V0.5C11.5 0.224 11.724 0 12 0H18C18.276 0 18.5 0.224 18.5 0.5V5.5C18.5 7.43 16.93 9 15 9ZM12.5 1V5.5C12.5 6.878 13.621 8 15 8C16.379 8 17.5 6.878 17.5 5.5V1H12.5Z" fill="#D0D2D0"/>
            <Path d="M9 9C7.07 9 5.5 7.43 5.5 5.5V0.5C5.5 0.224 5.724 0 6 0H12C12.276 0 12.5 0.224 12.5 0.5V5.5C12.5 7.43 10.93 9 9 9ZM6.5 1V5.5C6.5 6.878 7.621 8 9 8C10.379 8 11.5 6.878 11.5 5.5V1H6.5Z" fill="#D0D2D0"/>
            <Path d="M3.25 9C1.458 9 0 7.542 0 5.75V2.5C0 1.122 1.121 0 2.5 0H6C6.276 0 6.5 0.224 6.5 0.5V5.75C6.5 7.542 5.042 9 3.25 9ZM2.5 1C1.673 1 1 1.673 1 2.5V5.75C1 6.991 2.01 8 3.25 8C4.49 8 5.5 6.991 5.5 5.75V1H2.5Z" fill="#D0D2D0"/>
            <Path d="M19.5 24C19.095 24 18.715 23.841 18.432 23.552L13.728 19.013C13.255 18.534 13 17.911 13 17.25V14C13 13.449 13.448 13 14 13H17.25C17.911 13 18.534 13.255 19.005 13.719L23.562 18.44C23.842 18.716 24 19.095 24 19.5C24 19.9 23.844 20.277 23.561 20.561L20.561 23.561C20.278 23.844 19.901 24 19.5 24V24ZM14 14V17.25C14 17.646 14.153 18.02 14.432 18.302L19.136 22.842C19.343 23.052 19.665 23.044 19.853 22.854L22.854 19.854C22.948 19.759 23 19.633 23 19.5C23 19.365 22.947 19.238 22.851 19.144L18.294 14.423C18.021 14.153 17.646 14 17.25 14H14Z" fill="#D0D2D0"/>
            </G>
            <Defs>
            <ClipPath id="clip0_345_986">
            <Rect width="24" height="24" fill="white"/>
            </ClipPath>
            </Defs>
            </Svg>

        </View>
        
    )
}
export default MarketPlaceWhite
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });