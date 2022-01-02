import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground} from 'react-native'
import Card from './WalletComponents/Card'
import ConverHistory from './WalletComponents/ConverHistory'
import Greencard from './WalletComponents/Greencard'
import TImeFrame from './WalletComponents/TImeFrame'
import TransCard from './WalletComponents/TransCard'
import TransHead from './WalletComponents/TransHead'
import img from "../assets/walletBackimage.png";

 function WalletScreen(props){
  const {navigation} = props

    return (
        <View style={styles.container}>
          <ImageBackground source={img} resizeMode="cover" style={styles.image}>
             <Card textOne="Your WasteCoin" textTwo="WC" balance="123.67"/>
          </ImageBackground>   
             <View style={styles.flexBtw}>
              <Greencard textOne="Spend" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Marketplace")}}/>
              <Greencard textOne="Claim bonus" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Bonus")}}/>
             </View>
              <ConverHistory text="Conversion History" symbol=">"/>
              <TransHead/>
              <ScrollView style={styles.scrollView}>
                <TImeFrame day="Today"/>
                  <TransCard   textWord="Daily bonus" textDate="29/12/2021" textCoin="+WC 10.4"/>
                  <TransCard  textWord="Received 50% discount on Samsung 166S" textDate="29/12/2021" textCoin="+WC 50.4"/>
                  <TransCard  textWord="Received 60% off youtube prime subscription" textDate="29/12/2021" textCoin="FREE"/>      
                  <TransCard  textWord="Received 50% discount on Samsung 166S" textDate="29/12/2021" textCoin="+WC 50.4"/>
                <TImeFrame day="Yesterday"/>
                  <TransCard  textWord="Received 60% off youtube prime subscription" textDate="29/12/2021" textCoin="FREE"/>
                  <TransCard  textWord="Received 50% discount on Samsung 166S" textDate="29/12/2021" textCoin="+WC 50.4"/>
                  <TransCard  textWord="Received 60% off youtube prime subscription" textDate="29/12/2021" textCoin="FREE"/>
              </ScrollView>
        </View>
        
        
    )
}
export default WalletScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"7%",
      paddingTop:100,
      backgroundColor:"#F9FFF9",
    },
    flexBtw:{
      flexDirection:"row",
      justifyContent:"space-between",
    },
    scrollView: {
      // backgroundColor: 'pink',
      marginHorizontal: 2,
      height: 60,
      flex: 1,
    },
    image: {
      width:"100%",

      
    },
  });