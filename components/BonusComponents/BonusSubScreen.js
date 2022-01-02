import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import QuestionScreen from './QuestionScreen';
import VideoScreen from './VideoScreen';

 function BonusSubScreen(props){
  const {setOtherScreen, bonus,timer,type,url,coin, bonusName} = props;

    return (
        <View style={styles.container}>

          {/* <TouchableOpacity 
              onPress={()=>setOtherScreen(false)}
           >
            <MaterialIcons name="cancel" size={30} color="#C85929" />
          </TouchableOpacity> */}
          {type =="video" &&
           <VideoScreen url={url} timer={timer} setOtherScreen={setOtherScreen} coin={coin} bonusName={bonusName}/>
          }
          {type =="other" &&
          <Text>Other Screen</Text>
          }
          {type =="question" &&
          <QuestionScreen question={bonus} timer={timer} setOtherScreen={setOtherScreen} coin={coin} bonusName={bonusName}/>
          }
          
        </View>
      
    )
}
// export default DailyBonusScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    bonuses:{
      bonusOne:state.bonusOne,
      bonusTwo:state.bonusTwo,
      bonusThree:state.bonusThree
    }
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
)(BonusSubScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"5%",
      paddingTop:"10%",
      backgroundColor:"#FFF5E3"
    },
    containerTwo: {
      zIndex:100,
      flex: 1,
      padding:"5%",
      paddingTop:"10%",
      backgroundColor:"#FF0",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
    },
    innerContainer:{
      // height:"30%",
      width:"100%",
      marginBottom:30,
      flexDirection:'column',
      backgroundColor:"#F0CA88",
      padding:"5%",
      borderRadius:10,
    },
    innerText:{
      color:"#000",
      fontFamily:'Rubik',
      fontSize:14,
    },
    innerDiv:{
      flexDirection:"row",
      justifyContent:"space-around",
    },
    
    flexRow:{
      flexDirection:"row",
      alignItems:"center"
    },
    textShare:{
      color:"#C85929",
      marginLeft:-20
    }
  });