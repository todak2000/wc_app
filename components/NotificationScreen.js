import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
 function NotificationScreen(props){
  const {navigation} = props
    return (

        <View style={styles.container}>
             <TouchableOpacity 
              style={styles.container}
              onPress={()=>navigation.navigate("SignIn")}
           >
            <Text>Notification - Back</Text>
          </TouchableOpacity>
        </View>
        
    )
}
export default NotificationScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });