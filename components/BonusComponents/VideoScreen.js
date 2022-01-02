import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import DailySVG from './DailySVG';
import { MaterialIcons } from '@expo/vector-icons';
import CoinSVG from './CoinSVG';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { ClaimBonus, UpdateBonusState } from '../../actions/index';
import YoutubePlayer from "react-native-youtube-iframe";

 function VideoScreen(props){
  const [timing, setTiming] = useState(false);
  const [countDown, setCountDown] = useState(null);
   const {navigation,bonusName, timer, url, setOtherScreen, coin, bonusApi, user, updateBonusStateApi} = props
  useEffect(() => {
    let counter = timer/1000;

    var oneSecInterval = setInterval(() => {
        counter --;
        setCountDown(counter)
        if (counter == 0) {
            clearInterval(oneSecInterval);
            setTiming(true)
        }
    }, 1000)
  }, []);
  const __claimBonus = () => {
    const data = {
      coin: coin,
      user_id:user.user_id

    }
    updateBonusStateApi(bonusName)
    bonusApi(data).then(res=>{
      if (res){
        if (res.success === true && res.status === 200){
          setOtherScreen(false)
          
        }
        else{
          setOtherScreen(false)
        }
      }
    })
  }
    return (
        <View>
          {timing && 
            <TouchableOpacity 
                onPress={()=>setOtherScreen(false)}
            >
              <MaterialIcons name="cancel" size={30} color="#C85929" />
            </TouchableOpacity>
          }
            <View style={styles.container}>
              <View style={styles.you}>
              <YoutubePlayer
                height={300}
                play={true}
                videoId={"0vCY3k3ffGQ"}
              />
              </View>

              {
                !timing && <Text>{countDown}</Text>
              }
              {timing && 
            <TouchableOpacity 
                style={styles.btnClaim}
                onPress={__claimBonus}
            >
              <CoinSVG /><Text style={styles.textClaim}>Claim your {coin}WC now!</Text>
            </TouchableOpacity>
          }
            </View>
        </View>
        
    )
}
// export default QuestionScreen
function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    bonusApi: bindActionCreators(ClaimBonus, dispatch),
    updateBonusStateApi: bindActionCreators(UpdateBonusState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoScreen);
const styles = StyleSheet.create({
    container: {
      width:"100%",
      // backgroundColor:"#FFEFD3",
      borderRadius: 10,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      height:"70%",
    },
    you:{
      width:"100%",
      marginTop:"40%",
    },
    textClaim:{
      marginLeft:20,
      color:"#F0CA88"
    },
    btnClaim:{
      backgroundColor:"#fff",
      width:"80%",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      padding:10,
      borderRadius:10,
    },
    flexyRight:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        padding:"5%",
        
    },
    textOne:{
      color:"#B48A3E",
      fontSize: 12,
      fontFamily:'Rubik',
      width:"100%",
    },
    textTwo:{
        color:"#B48A3E",
        fontSize: 20,
        width:"100%",
        textAlign:"left",
        fontFamily:'Rubik',
        fontWeight:"700",
      },
      textBig:{
        color:"#fff",
        fontSize: 60,
        fontFamily:'Rubik',
        fontWeight:"bold"
      }
  });