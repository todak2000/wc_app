import React from 'react'
import { Text,StyleSheet, View, ScrollView, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
// import { StyleSheet, View, ScrollView, ImageBackground} from 'react-native'
import Card from './WalletComponents/Card'
import ConverHistory from './WalletComponents/ConverHistory'
import Greencard from './WalletComponents/Greencard'
import TImeFrame from './WalletComponents/TImeFrame'
import TransCard from './WalletComponents/TransCard'
import TransHead from './WalletComponents/TransHead'
import img from "../assets/walletBackimage.png";

 function WalletScreen(props){
  const {navigation, tx_data, user} = props
console.log(tx_data)
    return (
        <View style={styles.container}>
             {/* <Card textOne="Wallet Balance" textTwo="WC" balance={parseFloat(props.user.tokenBalance).toFixed(2)}/> */}
          <ImageBackground source={img} resizeMode="cover" style={styles.image}>
             <Card textOne="Your WasteCoin" textTwo="WC" balance={parseFloat(props.user.tokenBalance).toFixed(2)} recycleCount={user.recycleCount}/>
          </ImageBackground>   
             <View style={styles.flexBtw}>
              <Greencard textOne="Spend" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Marketplace")}}/>
              <Greencard textOne="Claim bonus" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Bonus")}}/>
             </View>
              <ConverHistory text="Transaction History"/>
              {/* <TransHead/> */}
              <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              {tx_data.length >0 ?
              tx_data.map((element) => {
                return (
                  <TransCard key={element.key}  textWord={element.transaction_message} textDate={element.due_date} textCoin= {element.amount} tx_type={element.transaction_type}/>
                );
              })
              :<Text style={styles.textRed}>Sorry! there are no transactions yet</Text>}
              </ScrollView>
        </View>
        
        
    )
}
// export default WalletScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    tx_data: state.tx_data
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
)(WalletScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"7%",
      paddingTop:"15%",
      width:"100%",
      // backgroundColor:"#F9FFF9",
    },
    flexBtw:{
      flexDirection:"row",
      justifyContent:"space-between",
    },
    textRed:{
      color:"#FF4900",
      padding:"5%",
      textAlign:"center",
      // backgroundColor:"#FF490020",
      marginTop:20,

    },
    scrollView: {
      // backgroundColor: 'pink',
      width:"100%",
      marginHorizontal: 2,
      height: 60,
      flex: 1,
    },
    image: {
      width:"100%",

      
    },
  });