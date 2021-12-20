import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
 function MarketPlaceScreen(props){
  //  console.log(props)
  const {navigation} = props
    return (

        <View style={styles.container}>
             <TouchableOpacity 
              style={styles.container}
              onPress={()=>navigation.navigate("SignIn")}
           >
            <Text> Market Place - Back {props.user_id}</Text>
          </TouchableOpacity>
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
      alignItems: 'center',
      justifyContent: 'center',
    },
  });