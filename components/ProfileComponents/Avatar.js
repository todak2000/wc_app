import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FollowerItem from './FollowerItem';

 function Avatar(props){

  
  const {navigation: { goBack }, fl_data} = props
  // console.log(props)
    return (
        <View style={styles.container}>
          <TouchableOpacity 
              onPress={()=>goBack()}
           >
            <Ionicons name="chevron-back" size={23} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Select your Favourite Recycling Avatar</Text>
          <View style={styles.avatarDiv}>

          </View>
        </View>
        
    )
}
// export default ProfileScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    fl_data: state.fl_data,
    // followers:state.followers,
    // following:state.following,
  }
}

// function mapDispatchToProps (dispatch ) {
//   return {
//     snapApi: bindActionCreators(Snap, dispatch)
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Avatar);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#4F9A51",
      padding:"5%",
      paddingTop:"10%"
    },
    headerText:{
      color:"#fff",
      fontFamily:"Rubik300",
      marginTop:10,
    },
    avatarDiv:{
      flexDirection:"row",
      justifyContent:"space-between",
      flexWrap:"wrap",
    }
   
  });