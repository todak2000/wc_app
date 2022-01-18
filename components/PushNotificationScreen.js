import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialIcons, Ionicons} from '@expo/vector-icons'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App(props) {
    const {navigation: { goBack }} = props;
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
      
    <View style={styles.container}>
        <TouchableOpacity 
              onPress={()=>goBack()}
           >
            <Ionicons name="chevron-back" size={23} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Notification</Text>

      <View >

        <Text style={styles.titleText}>Title</Text>
        <Text style={styles.inputTitle}> {notification && notification.request.content.title}</Text>
        {/* <Text>Title: </Text> */}

        <Text style={styles.titleText}>Body</Text>
        <Text style={styles.inputTitle}> {notification && notification.request.content.body}</Text>

        {/* <Text>Body: </Text> */}
        {/* <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text> */}
      </View>
    </View>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
const expoPushToken =["ExponentPushToken[jK9OP0ANoA8UiHcIE_7sRW]", "ExponentPushToken[zpTsEWKB4e8R-2zCvlQxZl]"]
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

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
      },
    inputTitle:{
        backgroundColor:"#5AB15C",
        padding:20,
        // height:45,
        // paddingLeft:20,
        color:"#fff",
        fontFamily:"Rubik300",
        // paddingRight:20,
      },
      inputTitle2:{
        backgroundColor:"#5AB15C",
        height:250,
        padding:20,
        paddingTop:20,
        fontFamily:"Rubik300",
        color:"#fff",
        marginBottom:30,
      },
      titleText:{
        color:"#fff",
        fontFamily:"Rubik300",
        marginTop:30,
        marginBottom:10,
      },
})