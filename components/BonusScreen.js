import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
// import GreenCard from './BonusComponents/GreenCard'
import BonusGreenCard from './BonusComponents/BonusGreenCard'
import BonusGoldCard from './BonusComponents/BonusGoldCard'
 function BonusScreen(props){
  //  console.log(props)
  const {navigation} = props
    return (

        <View style={styles.container}>
          <TouchableOpacity 
              onPress={()=>navigation.navigate("Wallet")}
           >
            <Ionicons name="chevron-back" size={23} color="#4B4B4B" />
          </TouchableOpacity>
          <View style={styles.Central}>
            <Text style={styles.Header}>Claim Bonus</Text>
            <Text style={styles.HeaderText}>All bonuses are funded by subscription fees and  commisissions from converting wastes uploaded</Text>
          </View>
          <TouchableOpacity style={styles.Central} onPress={()=>{navigation.navigate("AddFriend")}}>
            <BonusGreenCard textHeader="Invite Friend" textOne="For every friend that sign up , you will receive a token of 1WC"/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Central} onPress={()=>{navigation.navigate("DailyBonus")}}>
            <BonusGoldCard textHeader="Daily Bonus Ad" textOne="Claim daily bonus Ad "/>
          </TouchableOpacity>

        </View>
        
    )
}
export default BonusScreen
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
      padding:"5%",
      paddingTop:"10%"
    },
    Header:{
      fontSize:20,
      fontWeight:"700",
      fontFamily:'Rubik',
      marginBottom:10,
    },
    Central:{
      width:"100%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:20,
      marginBottom:20,
    }
  });