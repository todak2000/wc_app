import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Svg, { Path, Circle, Rect} from 'react-native-svg';

 function TopComponent(props){
  const {navigation} = props;

    return (

        <TouchableOpacity 
            style={styles.container}
            onPress={()=>navigation.navigate('SignIn')}
        >
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
        
    )
}
export default TopComponent
const styles = StyleSheet.create({
    container: {
      paddingTop:40,
      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems:"center",
    },
    text:{
      textAlign:"right",
      color:"#4F9A51",
      fontSize: 16,
      fontFamily:'Rubik',
      // fontWeight:"bold",
    }
  });