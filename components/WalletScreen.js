import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Card from './WalletComponents/Card'
import Greencard from './WalletComponents/Greencard'
 function WalletScreen(props){
  const {navigation} = props
    return (

        <View style={styles.container}>
             <Card textOne="Wallet Balance" textTwo="WC" balance={parseFloat(props.user.tokenBalance).toFixed(2)}/>
             <View style={styles.flexBtw}>
              <Greencard textOne="Spend" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Marketplace")}}/>
              <Greencard textOne="Claim bonus" textTwo="Go to Shop and make orders" onPress={()=>{navigation.navigate("Bonus")}}/>
             </View>
             {console.log("txs",props.tx_data)}
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
      paddingTop:100,
    },
    flexBtw:{
      flexDirection:"row",
      justifyContent:"space-between",
    }
  });