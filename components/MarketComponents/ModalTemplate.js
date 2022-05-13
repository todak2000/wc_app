import React from 'react'
import { Modal, StyleSheet, View } from 'react-native';


const ModalTemplate = (props) => {
    const {children, visible}=props
  return (
      <Modal transparent visible={visible}>
        <View style={styles.templateContainer}> 
                {children}
        </View>
    </Modal>
    
  )
}

export default ModalTemplate;
const styles = StyleSheet.create({
    templateContainer:{
        flex:1,
        backgroundColor: "rgba(29,29,29,0.6)",
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
    },
    modalChildren:{
       
        width:" 100%",
        display: 'flex',
        flexDirection: 'column',

        

        // height: 40,
    }
    




    
})



