import React, {useState} from 'react'
import { Text,StyleSheet, View} from 'react-native'
import ProfileHeader from './ProfileComponents/ProfileHeader'
import {connect} from 'react-redux'
import ProfileInput from './ProfileComponents/ProfileInput'
import ProfilePressable from './ProfileComponents/ProfilePressable'
import ProfileLogOut from './ProfileComponents/ProfileLogOut';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ButtonOut from './AuthComponents/ButtonOut'
import ButtonWhite2 from './AuthComponents/ButtonWhite2'
 function ProfileScreen(props){
  const [modalVisible, setModalVisible] = useState(false);
  const removeToken = async ()=>{  
    try{  
      let token = await AsyncStorage.removeItem('token');  
      let userid = await AsyncStorage.removeItem('user_id'); 
      if (token == null && userid == null){
        navigation.navigate('SignIn');
      }
    }  
    catch(error){  
      return error  
    }  
  }
  const openModal = ()=>{
    return (
      <View style={styles.modalView}>
        <View style={styles.centeredView}>
          <MaterialCommunityIcons name="logout-variant" size={24} color="#026551" />
          <Text style={styles.textOut}>Are you sure you want to leave?</Text>
          <View style={styles.modalFlex}>
            <ButtonOut buttonText="Log out" onPress={()=>{removeToken()}}/> 
              <ButtonWhite2 buttonText="No please!" onPress={()=>{closeModal()}}/>
          </View>
        </View>
      </View>
    )
  }
  const closeModal = ()=>{
    setModalVisible(false)
  }
  const {navigation, user, followers, following} = props
    return (
        <View style={styles.container}>
          
          <ProfileHeader textHeader="Profile" name={user.username} following={following} followers={followers} navigation={()=>{navigation.navigate("Followers")}}/>
          <ProfileInput tag="Email Address" value={user.email}/>
          <View>
            <Text style={styles.textHid}>Account Settings</Text>
            <ProfilePressable  value="Friends and Invite" navigation={()=>{navigation.navigate("AddFriend")}}/>
            {/* <ProfilePressable  value="Notification" /> */}
          </View>
          {modalVisible && openModal()}
          <View>
            <Text style={styles.textHid}>Other Information</Text>
            <ProfilePressable  value="FAQ" navigation={()=>navigation.navigate("Faq")}/>
             <ProfilePressable  value="Contact Us" navigation={()=>navigation.navigate("Contact")}/>
            {/*<ProfilePressable  value="Terms and Condition"/>
            <ProfilePressable  value="Privacy policy"/> */}
            <ProfileLogOut  value="Logout" onPress={()=>{setModalVisible(true)}}/>
    
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
    centeredView:{
      backgroundColor:"#fff",
      // height:"30%",
      padding:"8%",
      // width:"80%",
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center"
    },
    logout:{
      // backgroundColor:"#ff0",
      justifyContent:"center",
      alignItems:"center",
      padding:"5%",
      width:"100%",
      marginTop:20,
    },
    textLogout:{
      color:"#FF4900",
      fontFamily:"Rubik200",
      fontSize:18,
    },
    modalFlex:{
      justifyContent:"space-between",
      flexDirection:"row",
    },
    textOut:{
      color:"#393939",
      fontFamily:"Rubik400",
      fontSize:18,
      width:"70%",
      textAlign:"center",
      marginTop:20,
    },
    modalView:{
      backgroundColor:"#00000070",
      position:"absolute",
      width:"100%",
      height:"100%",
      // top:"20%",
      zIndex:1000,
      justifyContent:"center",
      alignItems:"center"
    },
    textHid:{
      paddingLeft:"5%",
      marginTop:10,
      fontSize: 15,
      fontWeight:"bold",
      fontFamily:'Rubik',
    },
  });