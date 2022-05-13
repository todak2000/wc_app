import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native'

import HorizonalScrollNavbar from './MarketComponents/HorizonalScrollNavbar'

import MarketHeader from './MarketComponents/MarketHeader'
 function MarketPlaceScreen(props){
  //  console.log(props)
  const {navigation} = props
  
    return (

        <View style={styles.container}>
          <MarketHeader balance="WC120"/>
          <HorizonalScrollNavbar  navigation={navigation}/>
  
             {/* <TouchableOpacity 
              style={styles.container}
              onPress={()=>navigation.navigate("Purchase")}
           > 
             
            <Text> Market Place - Back {props.user_id}</Text>
          </TouchableOpacity> */}

        </View>
        
    )
}
export default MarketPlaceScreen
// function mapStateToProps (state) {
//   return {
//     user: state.user,
//     user_id: state.user_id
//   }
// }

// function mapDispatchToProps (dispatch ) {
//   return {
//     signInApi: bindActionCreators(SignIn, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MarketPlaceScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"7%",
      paddingTop: 30,
      backgroundColor: "#FFFFFF",
    },

  });