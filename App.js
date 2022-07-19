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
import AddFriendScreen from './components/AddFriendScreen';
import DailyBonusScreen from './components/DailyBonusScreen';
import Followers from './components/ProfileComponents/Followers';
import ContactUs from './components/ProfileComponents/ContactUs';
import Faq from './components/ProfileComponents/Faq';
// import { bindActionCreators } from 'redux';


import ForgotPasswordScreen from './components/ForgotPasswordScreen';



import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import Avatar from './components/ProfileComponents/Avatar';

// const customFonts = {
//     Rubik: require("./assets/fonts/Rubik.ttf"),
// };

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
        // height:70,
        // paddingTop:"7%",
        
      },
      
    })}
    >
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="Marketplace" component={MarketPlace} />
      <Tab.Screen name="Wallet" component={Wallet} />
      {/* <Tab.Screen name="Notification" component={Notification} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

 export default function App() {
  
  const store = createStore(reducer, middleware)
  
  const [loading, setLoading] = useState(false);


  const [IsReady, SetIsReady] = useState(false);

  const FontLoading = async () => {
    await useFonts(); // Font is being loaded here
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={FontLoading}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
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
        <Stack.Screen 
          name="AddFriend" 
          component={AddFriendScreen} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="DailyBonus" 
          component={DailyBonusScreen} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Followers" 
          component={Followers} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Faq" 
          component={Faq} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactUs} 
          options={{ headerShown: false} }
        />
        <Stack.Screen 
          name="Avatar" 
          component={Avatar} 
          options={{ headerShown: false} }
        />
        
      </Stack.Navigator>
          
        </NavigationContainer>
      </View>
    </Provider>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
