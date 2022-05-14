import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native'
import ButtonComponent from './ButtonComponent'
import { useState } from 'react'
import Subscription from './Subscription';
import Partners from './Partners';
import LocalMarket from './LocalMarket';
import Donation from './Donation';
import HomeMadeProducts from './HomeMadeProducts';
import { useRoute } from '@react-navigation/native';

const HorizonalScrollNavbar = ({navigation}) => {

    const [ clear, setClear ] = useState(true);
    const [ donation, setDonation ] = useState(false);
    const [ subscription, setSubscription ] = useState(false);
    const [ homeMade, setHomeMade ] = useState(false);
    const [ partner, setPartner ] = useState(false);

    const route = useRoute()

   

    return (
        <View style={styles.height}> 
        <View style={styles.topHolder}>
        <ScrollView horizontal={true} style={styles.holder} showsHorizontalScrollIndicator={false} >

            <ButtonComponent
            backgroundColor={clear? "#D2FFCB": null}
            color={clear? "#4F9A51": "#4F9A51"}
            onPress={()=> {setClear(true),setDonation(false) , setSubscription(false),setHomeMade(false),setPartner(false)}}
             name="Local Market"
             />

            <ButtonComponent
             backgroundColor={donation? "#D2FFCB": null}
             color={donation? "#4F9A51": "#4F9A51"}
             onPress={()=> {setClear(false),setDonation(true) , setSubscription(false),setHomeMade(false),setPartner(false) }}
             name="Donation"
             />

            <ButtonComponent 
             backgroundColor={subscription? "#D2FFCB": null}
             color={subscription? "#4F9A51": "#4F9A51"}
             onPress={()=> {setClear(false),setDonation(false) , setSubscription(true),setHomeMade(false),setPartner(false) }}
             name="Subscription"
            />

            <ButtonComponent
            backgroundColor={homeMade? "#D2FFCB": null}
            color={homeMade? "#4F9A51": "#4F9A51"}
            onPress={()=> {setClear(false),setDonation(false) , setSubscription(false),setHomeMade(true),setPartner(false) }}
             name="Home Made Products"
             />

            <ButtonComponent 
             backgroundColor={partner? "#D2FFCB": null}
             color={partner? "#4F9A51": "#4F9A51"}
             onPress={()=> {setClear(false),setDonation(false) , setSubscription(false),setHomeMade(false),setPartner(true) }}
            name="Partners"
            />

        </ScrollView>
     </View>
     <View style={{display:"flex" ,flexDirection: 'column',}}>
     <ScrollView  vertical={true} showsVerticalScrollIndicator={false}>
     <Subscription navigation={navigation} display={subscription? "flex" : "none"}/>
     <Partners navigation={navigation} display={partner? "flex" : "none"}/>
     <LocalMarket  route={route} navigation={navigation} display={clear? "flex" : "none"}/>
     <HomeMadeProducts navigation={navigation} display={homeMade? "flex" : "none"}/>
     <Donation navigation={navigation} display={donation? "flex" : "none"}/>
    </ScrollView>
    </View>
     </View>
    
    )
}

export default HorizonalScrollNavbar
const styles = StyleSheet.create({
    height:{
        flex: 1,
    },
    topHolder:{
      
    },
    holder:{
        marginTop: 20,
        marginBottom: 8, 
        // overflow: "scroll",
     
        display: 'flex',
        flexDirection: 'row',
       
    }
})