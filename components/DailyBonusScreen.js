import React, {useState, useEffect} from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import DailySVG from './BonusComponents/DailySVG';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import BonusMiddle from './BonusComponents/BonusMiddle';
import BonusCard from './BonusComponents/BonusCard';
import BonusCardTwo from './BonusComponents/BonusCardTwo';
import BonusSubScreen from './BonusComponents/BonusSubScreen';
import BonusCardDone from './BonusComponents/BonusCardDone';
import { RestartBonusState } from '../actions/index';

 function DailyBonusScreen(props){
  const [otherScreen, setOtherScreen] = useState(false);
  const [bonusType, setBonusType] = useState("");
  const [bonus, setBonus] = useState("");
  const [bonusURL, setBonusURL] = useState("");
  const [bonusTimer, setBonusTimer] = useState("");
  const [bonusCoin, setBonusCoin] = useState(null);
  const [bonusName, setBonusName] = useState("");

  useEffect(() => {
    const x = new Date()
    const today =x.getTime()/1000;
    const d = props.lastBonusDate
    d.setHours(48,0,0,0)
    const nextDueDate = d.getTime()/1000;
    // console.log("Bonus Done: ",props.bonusDone)
    // console.log("Today Date: ",today)
    // console.log("Next due bonus date: ",nextDueDate)
    if(today >= nextDueDate){
      props.RestartBonusStateApi()
    }
    else{
    }
  }, []);

  const {navigation, bonuses, dailyRecyclingCount} = props;
  console.log("dailyRecyclingCount: ", dailyRecyclingCount)
    return (
        <View style={styles.container}>
          {
            otherScreen ?
            <BonusSubScreen 
              setOtherScreen = {setOtherScreen} 
              bonus={bonus}
              timer={bonusTimer}
              type={bonusType}
              url={bonusURL}
              coin={bonusCoin}
              bonusName={bonusName}
            />
            :
            <View>
              <TouchableOpacity 
                  onPress={()=>navigation.navigate("Bonus")}
              >
                <Ionicons name="chevron-back" size={23} color="#C85929" />
              </TouchableOpacity>
              <View style={styles.flexRow}>
                    <DailySVG />
                  <Text style={styles.textShare}>Daily Bonus</Text>
                </View>
              <View style={styles.innerContainer}>
                <Text style={styles.innerText}>Unlock to earn more WasteCoins</Text>
                <View style={styles.innerDiv}>
                  {bonuses.bonusOne.done ?
                  <BonusCardDone />
                  :
                  <BonusCard 
                    bonusCoin={bonuses.bonusOne.coin} 
                    onPress={()=>{
                      setOtherScreen(true);
                      setBonus(bonuses.bonusOne.bonus)
                      setBonusTimer(bonuses.bonusOne.timer)
                      setBonusURL(bonuses.bonusOne.url)
                      setBonusType(bonuses.bonusOne.type)
                      setBonusCoin(bonuses.bonusOne.coin)
                      setBonusName("bonusOne")
                    }} 
                  />
                  }
                  {bonuses.bonusTwo.done ?
                  <BonusCardDone />
                  :
                  <BonusCard 
                    bonusCoin={bonuses.bonusTwo.coin} 
                    onPress={()=>{
                      setOtherScreen(true);
                      setBonus(bonuses.bonusTwo.bonus)
                      setBonusTimer(bonuses.bonusTwo.timer)
                      setBonusURL(bonuses.bonusTwo.url)
                      setBonusType(bonuses.bonusTwo.type)
                      setBonusCoin(bonuses.bonusTwo.coin)
                      setBonusName("bonusTwo")
                    }}
                  />
                  }
                  {dailyRecyclingCount == 10 ?
                  <BonusCardDone />
                  :
                  <BonusCardTwo value={bonuses.bonusThree.bonus} count={dailyRecyclingCount}/>
                  }
                </View>
              </View>
              <BonusMiddle navigation={()=>navigation.navigate("AddFriend")} textOne="Get your friends to join and receive WC0.1 for each successful invite"/>
            </View>
          }
        </View>
      
    )
}
// export default DailyBonusScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    lastBonusDate: state.date,
    bonusDone:state.bonusDone,
    dailyRecyclingCount: state.dailyRecyclingCount,
    bonuses:{
      bonusOne:state.bonusOne,
      bonusTwo:state.bonusTwo,
      bonusThree:state.bonusThree
    }

  }
}

function mapDispatchToProps (dispatch ) {
  return {
    RestartBonusStateApi: bindActionCreators(RestartBonusState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyBonusScreen);

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