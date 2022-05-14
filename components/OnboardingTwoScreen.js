import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import Svg, { Path, G} from 'react-native-svg';
import OnboardingTwo from './SVGComponents/OnboardingTwo'
import Header from './SVGComponents/Header'
import Subheader from './SVGComponents/Subheader'
import BottomComponent from './SVGComponents/BottomComponent'
import TopComponent from './SVGComponents/TopComponent'

const customFonts = {
  Rubik: require("../assets/fonts/Rubik.ttf"),
};

 function OnboardingTwoScreen(props){
  const {navigation} = props;
    return (

        <View style={styles.container}>
            <TopComponent navigation={navigation}/>
            <OnboardingTwo />
            <Header headerText="Snap the Waste item"/>
            <Subheader subHeaderText="Just snap shot the plastic bottle or can and get rewarded with WasteCoin"/>
            
            <View style={styles.bottom}>
            <BottomComponent navigation={navigation} navText="OnboardingThree"/>
            </View>
        </View>
        
    )
}
export default OnboardingTwoScreen
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