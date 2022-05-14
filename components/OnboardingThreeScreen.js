import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import Svg, { Path, G} from 'react-native-svg';
import OnboardingThree from './SVGComponents/OnboardingThree'
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
            <OnboardingThree />
            <Header headerText="Deposit Waste"/>
            <Subheader subHeaderText="Deliver the waste to the closest Waste collection hub."/>
            
            <View style={styles.bottom}>
              <BottomComponent navigation={navigation} navText="SignIn"/>
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