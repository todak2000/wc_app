import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import middleware  from './middleware/index';
import reducer from './reducers/index';
// import { setLocalNotification } from './utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from './components/WalletScreen';
import Scanner from './components/ScannerScreen';
import Onboarding from './components/OnboardingOneScreen';
import OnboardingTwo from './components/OnboardingTwoScreen';
import OnboardingThree from './components/OnboardingThreeScreen';
import SignIn from './components/SignInScreen';
import SignUp from './components/SignUpScreen';
import AccountVerification from './components/AccountVerificationScreen';
import MarketPlace from './components/MarketPlaceScreen';
import Profile from './components/ProfileScreen';
import Notification from './components/NotificationScreen';
import MarketPlaceWhite from './components/TabComponents/MarketPlaceWhite';
import WalletWhite from './components/TabComponents/WalletWhite';
import ScannerWhite from './components/TabComponents/ScannerWhite';
import ProfileWhite from './components/TabComponents/ProfileWhite';
import NotificationWhite from './components/TabComponents/NotificationWhite';
import Spinner from 'react-native-loading-spinner-overlay';
import MarketPlaceGreen from './components/TabComponents/MarketPlaceGreen';
import WalletGreen from './components/TabComponents/WalletGreen';
import ScannerGreen from './components/TabComponents/ScannerGreen';
import ProfileGreen from './components/TabComponents/ProfileGreen';
import NotificationGreen from './components/TabComponents/NotificationGreen';
import CameraScreen from './components/CameraScreen';
import BonusScreen from './components/BonusScreen';
// import { bindActionCreators } from 'redux';

import ForgotPasswordScreen from './components/ForgotPasswordScreen';
const customFonts = {
  Rubik: require("./assets/fonts/Rubik.ttf"),
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Wallet"){
          if (iconName = focused){
            return <WalletGreen />
          }
          else{
            return <WalletWhite />
          }
        }
        else if(route.name === "Scanner"){
          if (iconName = focused){
            return <ScannerGreen />
          }
          else{
            return <ScannerWhite />
          }
          
        }
        else if(route.name === "Profile"){
          if (iconName = focused){
            return <ProfileGreen />
          }
          else{
            return <ProfileWhite />
          }
        }
        else if(route.name === "Marketplace"){
          if (iconName = focused){
            return <MarketPlaceGreen />
          }
          else{
            return <MarketPlaceWhite />
          }
        }
        else if(route.name === "Notification"){
          if (iconName = focused){
            return <NotificationGreen />
          }
          else{
            return <NotificationWhite />
          }
        }

      },
      // tabBarActiveTintColor: '#AA00FF',
      // tabBarInactiveTintColor: 'gray',
      headerShown:false,
      tabBarShowLabel: false,
      tabBarStyle : {
        margin:"5%",
        shadowColor: '#171717',
        shadowOffset: {width: -1, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        borderRadius:50,
        alignItems:"center",
        
      },
      
    })}
    >
      <Tab.Screen name="Marketplace" component={MarketPlace} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  // const {navigation} = props;
  // console.log(navigation)
  useEffect(() => {
    
    
    // setLoading(true);
    // const userID = async ()=>{  
    //   try{  
    //     let user = await AsyncStorage.getItem('user_id');  
         
    //     // return user 
    //     setUserid(user)
    //     setLoading(false);
    //     console.log(userid);
    //     // navigation.navigate("Home")
    //   }  
    //   catch(error){  
    //     console.log(error)  
    //   }  
    // }  
    // userID()
  }, []);
  const store = createStore(reducer, middleware)
  
  const [loading, setLoading] = useState(false);
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Spinner visible={loading}/>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="OnboardingTwo" 
          component={OnboardingTwo} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="OnboardingThree" 
          component={OnboardingThree} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="SignIn" 
          initialParams={{ message: "" }}
          component={SignIn} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Verification" 
          component={AccountVerification} 
          options={{ headerShown: false} }
        />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ userid: null }}
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Bonus" 
          component={BonusScreen} 
          options={{ headerShown: false} }
        />
        
      </Stack.Navigator>
          
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

// function mapStateToProps (state) {
//   return {
//     user: state.user
//   }
// }

// function mapDispatchToProps (dispatch ) {
//   return {
//     getUser: bindActionCreators(getUser, dispatch)
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
