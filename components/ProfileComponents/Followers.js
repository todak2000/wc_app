import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FollowerItem from './FollowerItem';

 function Followers(props){

  
  const {navigation: { goBack }, fl_data} = props
  // console.log(props)
    return (
        <View style={styles.container}>
          <TouchableOpacity 
              onPress={()=>goBack()}
           >
            <Ionicons name="chevron-back" size={23} color="#fff" />
          </TouchableOpacity>
          <View style={styles.flexyHead}>
          <Text style={styles.headerText}>Recycling Followers</Text>
          <Text style={styles.headerText}>Items Rcycled</Text>
          </View>


          {fl_data.length > 0 &&
              fl_data.map((element) => {
                return (
                  <FollowerItem key={element.name} coins={element.coins} name={element.name} />
                );
              })
          }
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
)(Followers);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#4F9A51",
      padding:"5%",
      paddingTop:"10%"
    },
    flexyHead:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    headerText:{
      color:"#fff",
      fontFamily:"Rubik300",
      marginTop:10,
    }
   
  });