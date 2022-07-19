import React from 'react'
import { Text,StyleSheet, View} from 'react-native'
import {MaterialIcons, Ionicons} from '@expo/vector-icons'

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

 function FaqItem(props){

  
  const {textHeader, textBody} = props
    return (
        <View style={styles.container}>
          <Collapse>
              <CollapseHeader style={styles.textHed}>
                <View>
                  <Text style={styles.textHeader}>{textHeader}</Text>
                </View>
              </CollapseHeader>
              <CollapseBody style={styles.textCol}>
                <Text style={styles.textBody}>{textBody}</Text>
              </CollapseBody>
          </Collapse>

        </View>
        
    )
}
export default FaqItem
const styles = StyleSheet.create({
    container: {
      paddingTop:10,
      paddingBottom:10,
    },
    textHed:{
      borderBottomWidth:0.3,
      paddingBottom:20,
      borderBottomColor:"#fff"
    },
    textHeader:{
      fontFamily:"Rubik600",
      fontSize:14,
      color:"#fff"
    },
    textCol:{
      backgroundColor:"#CFFFC7",
    },
    textBody:{
      fontFamily:"Rubik300",
      fontSize:14,
      color:"#5AB15C",
      padding:10,

    }
  });