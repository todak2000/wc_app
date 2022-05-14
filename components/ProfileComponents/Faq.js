import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import FaqItem from './FaqItem'
 function Faq(props){

  
  const {navigation: { goBack }} = props
    return (
        <View style={styles.container}>
          <TouchableOpacity 
              onPress={()=>goBack()}
           >
            <Ionicons name="chevron-back" size={23} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>FAQ</Text>
          <FaqItem 
            textHeader="What is WasteCoin?" 
            textBody="WasteCoin is an app that rewards you with wastecoins- WC for your recycling efforts. These WC can be exchanged for discounted items, subscriptions and other perks at the marketplace. "
          />
          <FaqItem 
            textHeader="How does WasteCoin work?" 
            textBody="WasteCoin works if you snap every plastic,can waste you use and you get rewarded with 0.1WC per item"
          />
          <FaqItem 
            textHeader="How do I earn WasteCoin?" 
            textBody="You can earn by scanning your plastic, can waste, referal, doing daily tasks etc"
          />
          <FaqItem 
            textHeader="Can I Cashout my WasteCoins to Paypal/Bank Account?" 
            textBody="Currently we are yet to enable that feature, rather you can use your earnings to buy items, subscriptions at the marketplace"
          />
          <FaqItem 
            textHeader="How does the Marketplace work?" 
            textBody="At the marketplace there are several options for you to spend your earnings. You just need to decide how and how much and you get the requested service or item."
          />
          <FaqItem 
            textHeader="Sorry, my question was not answered" 
            textBody="You can reach us at info@wastecoin.co or use the contact form on the profile section of the app. We would love to hear from you. Thanks"
          />
        </View>
        
    )
}
function mapStateToProps (state) {
  return {
    user: state.user,
    fl_data: state.fl_data,
  }
}

export default connect(
  mapStateToProps,
)(Faq);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#4F9A51",
      padding:"5%",
      paddingTop:"10%"
    },
    headerText:{
      color:"#fff",
      fontFamily:"Rubik300",
      marginTop:10,
      marginBottom:30,
    }
   
  });