import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import Card from './WalletComponents/Card'
import Greencard from './WalletComponents/Greencard'
 function WalletScreen(props){
  const {navigation} = props
    return (

        <View style={styles.container}>
             <Card textOne="Wallet Balance" textTwo="WC" balance="123.67"/>
             <View style={styles.flexBtw}>
              <Greencard textOne="Spend" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Marketplace")}}/>
              <Greencard textOne="Claim bonus" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Bonus")}}/>
             </View>
        </View>
        
        
    )
}
export default WalletScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:"7%",
      paddingTop:100,
    },
    flexBtw:{
      flexDirection:"row",
      justifyContent:"space-between",
    }
  });