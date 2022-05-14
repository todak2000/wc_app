import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path} from 'react-native-svg';

 function NotificationWhite(){
    return (

        <View style={styles.container}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M20.6088 16.3085V11.7391C20.6088 7.71741 17.8366 4.33144 14.1028 3.39066C14.2593 3.07627 14.3479 2.72231 14.3479 2.34788C14.3479 1.05323 13.2947 0 12.0001 0C10.7055 0 9.65223 1.05323 9.65223 2.34783C9.65223 2.72227 9.74078 3.07622 9.89734 3.39061C6.16356 4.33139 3.39137 7.71741 3.39137 11.7391V16.3085C2.48045 16.6315 1.82617 17.5014 1.82617 18.5217C1.82617 19.8163 2.87941 20.8695 4.174 20.8695H8.16578C8.5293 22.6535 10.1103 24 12.0001 24C13.8898 24 15.4708 22.6535 15.8344 20.8695H19.8262C21.1208 20.8695 22.174 19.8163 22.174 18.5217C22.174 17.5015 21.5197 16.6316 20.6088 16.3085ZM12.0001 1.5652C12.4316 1.5652 12.7827 1.9163 12.7827 2.34783C12.7827 2.77936 12.4316 3.13045 12.0001 3.13045C11.5685 3.13045 11.2174 2.77936 11.2174 2.34783C11.2174 1.9163 11.5685 1.5652 12.0001 1.5652ZM12.0001 22.4348C10.9798 22.4348 10.1099 21.7753 9.78686 20.8643H14.2133C13.8902 21.7753 13.0203 22.4348 12.0001 22.4348ZM19.8262 19.3043H4.174C3.74247 19.3043 3.39137 18.9533 3.39137 18.5217C3.39137 18.0902 3.74247 17.7391 4.174 17.7391H5.73925C6.17144 17.7391 6.52188 17.3887 6.52188 16.9565C6.52188 16.5242 6.17148 16.1738 5.73925 16.1738H4.95658V11.739C4.95658 7.85527 8.11628 4.69556 12.0001 4.69556C15.8838 4.69556 19.0435 7.85527 19.0435 11.739V16.1738H18.2603C17.8281 16.1738 17.4776 16.5242 17.4776 16.9565C17.4776 17.3887 17.828 17.7391 18.2603 17.7391H19.8262C20.2577 17.7391 20.6088 18.0902 20.6088 18.5217C20.6088 18.9533 20.2577 19.3043 19.8262 19.3043Z" fill="#D0D2D0"/>
            <Path d="M12 6.26099C8.97929 6.26099 6.52173 8.71855 6.52173 11.7393C6.52173 12.1715 6.87212 12.5219 7.30435 12.5219C7.73659 12.5219 8.08698 12.1715 8.08698 11.7393C8.08698 9.58161 9.84235 7.82624 12 7.82624C12.4322 7.82624 12.7826 7.47585 12.7826 7.04361C12.7826 6.61138 12.4322 6.26099 12 6.26099Z" fill="#D0D2D0"/>
          </Svg>

        </View>
        
    )
}
export default NotificationWhite
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });