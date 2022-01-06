import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity, Share} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { FontAwesome5 } from '@expo/vector-icons';





 function AddFriendScreen(props){
  
  const {navigation: { goBack }, refCode} = props
   const copyToClipboard = () => {
    Clipboard.setString(refCode);
    // console.log("clipboard: ", refCode)
  };
  const message = `
    Hi! I would like to invite you to join me on WasteCoin (WC)- an  app that educates and rewards your recycling efforts. Register with my referral code - ${refCode} to earn your first 2WC. \n
    Why should you join WasteCoin? \n
    WasteCoin aligns majorly with SDG goal 11 - Sustainable Cities and Communities, SDG goal 12 - Responsible Consumption and Production, and SDG goal 13 - Climate Action. WasteCoin is designed to motivate you to typically want to recycle as there is an added value to doing that. Thus, recycling rates will therefore be improved geometrically which will definitely reduce land, water pollution, incineration of waste, thus helping the UK to contribute immensely to mitigating global warming and preserving our water bodies from an environmental point of view. \n
    While we intend to achieve our mission which is to create zero-waste cities in the nearest future. We however understand that it can’t be done overnight. Hence, We are initiating the first phase which is to create a community of Potential recyclers. \n
    Thus as an active member of WasteCoin, you earn for just scanning recyclables, doing daily task/bonuses, and via referral. \n
    To know more about WasteCoin. Visit: https://wastecoin.co \n
    To download our app: Link to be given soon
  `
  const options = {
    message
  };
  const share = async (customOptions = options) => {
    try {
      await Share.share(customOptions);
    } catch (err) {
      return err
    }
  };
    return (

        <View style={styles.container}>
          <TouchableOpacity 
              onPress={()=>goBack()}
           >
            <Ionicons name="chevron-back" size={23} color="#4B4B4B" />
          </TouchableOpacity>
          <View style={styles.flexRow}>
              <View style={styles.greenBox}>
                <Ionicons name="share-social-sharp" size={24} color="#fff" />
              </View>
              <Text style={styles.textShare}>Invite your friends to join WasteCoin and earn 1WC at each successful invite</Text>
            </View>
            <View 
            style={styles.flexSocial}
            >
              <FontAwesome5 name="facebook" size={50} color="#165CE3" />
              <FontAwesome5 name="whatsapp" size={50} color="#2BB741" />
              <FontAwesome5 name="twitter" size={50} color="#1DA1F2" />
              <FontAwesome5 name="instagram" size={50} color="#cd486b" />
            </View>

            <TouchableOpacity 
            style={styles.flexSocialBtn}
            onPress={async () => {
              await share();
            }}
            >
              <Text>Invite a friend now!</Text>
            </TouchableOpacity>
          <View style={styles.innerContainer}>
            <View style={styles.refDiv}>
                <Text style={styles.refText}>{refCode}</Text>
                <TouchableOpacity 
                  style={styles.copyBtn}
                    onPress={copyToClipboard}
                >
                 <Text style={styles.textWhite}>Copy Referral Code</Text>
                </TouchableOpacity>
            </View>
            
          </View>
          </View>
        
    )
}
// export default AddFriendScreen
function mapStateToProps (state) {
  return {
    // user: state.user,
    refCode: state.refCode
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
)(AddFriendScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"5%",
      paddingTop:"10%",
      backgroundColor:"#F7FFF6"
    },
    innerContainer:{
      height:"30%",
      width:"100%",
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    },
    refText:{
      color:"#4F9A51",
      fontFamily:'Rubik',
      fontSize:14,
      width:"70%",
      paddingLeft:30,
    },
    copyBtn:{
      backgroundColor:'#4F9A51', 
      padding:15, 
      borderRadius:10,
      // borderTopLeftRadius:0,
      // borderBottomLeftRadius:0,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      // borderWidth:1,
      // borderColor:"#4F9A51",
      margin:-15, 
      marginLeft:-34 
    },
    refDiv:{
      backgroundColor:"#F0FFED",
      flexDirection:"row",
      width:"100%",
      justifyContent:"center",
      // borderWidth:1,
      // borderColor:"#4F9A51",
      padding:15,
      marginTop:50,
      borderRadius:10,
    },
    textWhite:{
      color:"#fff",
      fontFamily:'Rubik'
    },
    greenBox:{
      backgroundColor:"#A7EFA9",
      padding:10,
      borderRadius:10,
    },
    flexRow:{
      marginTop:50,
      flexDirection:"row",
      alignItems:"center",
    },
    flexSocial:{
      // marginTop:50,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-around",
      // backgroundColor:"#F0FFED",
      padding:40
    },
    flexSocialBtn:{
      marginTop:50,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      // backgroundColor:"#F0FFED",
      borderWidth:1,
      borderColor:"#4F9A51",
      borderRadius:5,
      padding:20
    },
    textShare:{
      fontFamily:'Rubik',
      marginLeft:20,
      color:"#000",
      paddingRight:"5%",
      // backgroundColor:"#f0f",
      width:"80%"
    },
    
  });