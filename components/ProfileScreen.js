import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import ProfileHeader from './ProfileComponents/ProfileHeader'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import ProfileInput from './ProfileComponents/ProfileInput'
import ProfilePressable from './ProfileComponents/ProfilePressable'

 function ProfileScreen(props){
  const {navigation, user, followers, following} = props
  console.log(props)
    return (
        <View style={styles.container}>
          <ProfileHeader textHeader="Profile" name={user.username} following={following} followers={followers}/>
          {/* <ProfileInput tag="Username" value="todak2000"/> */}
          {/* <ProfileInput tag="Full Name" value="Daniel Olagunju"/> */}
          <ProfileInput tag="Email Address" value={user.email}/>
          <View>
            <Text style={styles.textHid}>Account Settings</Text>
            <ProfilePressable  value="Friends and Invite" navigation={()=>{navigation.navigate("AddFriend")}}/>
            <ProfilePressable  value="Notification" />
          </View>
          <View>
            <Text style={styles.textHid}>Other Information</Text>
            <ProfilePressable  value="FAQ" navigation={()=>console.log("FAQ")}/>
            {/* <ProfilePressable  value="Contact Us"/>
            <ProfilePressable  value="Terms and Condition"/>
            <ProfilePressable  value="Privacy policy"/> */}
            <ProfilePressable  value="Logout" navigation={()=>navigation.navigate('SignIn')}/>
          </View>
        </View>
        
    )
}
// export default ProfileScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    tx_data: state.tx_data,
    followers:state.followers,
    following:state.following,
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
)(ProfileScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textHid:{
      paddingLeft:"5%",
      marginTop:10,
      fontSize: 15,
      fontWeight:"bold",
      fontFamily:'Rubik',
    }
  });