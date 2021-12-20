import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import OnboardingOne from './SVGComponents/OnboardingOne'
import Header from './SVGComponents/Header'
import Subheader from './SVGComponents/Subheader'
import BottomComponent from './SVGComponents/BottomComponent'
import TopComponent from './SVGComponents/TopComponent'

const customFonts = {
  Rubik: require("../assets/fonts/Rubik.ttf"),
};

 function OnboardingOneScreen(props){
  const {navigation} = props;
    return (

        <View style={styles.container}>
            <TopComponent navigation={navigation}/>
            <OnboardingOne />
            <Header headerText="Join the Community"/>
            <Subheader subHeaderText="Sign up with your email and start saving our planet from waste pollution."/>
            <View style={styles.bottom}>
            <BottomComponent navigation={navigation} navText="OnboardingTwo"/>
            </View>
        </View>
        
    )
}
export default OnboardingOneScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft:"10%",
      paddingRight:"10%",
    },
    bottom:{
      position:"absolute",
      bottom:50,
      width:"100%",
      left:"10%",
      flexDirection:"column",
      justifyContent:"space-between",
    }
  });