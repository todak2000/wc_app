import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
 function ProfileScreen(props){
  const {navigation} = props
    return (

        <View style={styles.container}>
             <TouchableOpacity 
              style={styles.container}
              onPress={()=>navigation.navigate("SignIn")}
           >
            <Text> Profile - Back</Text>
          </TouchableOpacity>
        </View>
        
    )
}
export default ProfileScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });