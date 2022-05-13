import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {MaterialIcons, Ionicons} from '@expo/vector-icons'
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';
import ButtonWhite from '../AuthComponents/ButtonWhite3';
import { sendMessage } from '../../actions/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
 function ContactUs(props){
  const [loading, setLoading] = useState(false);
  const [message, setMessage]= useState("");
  const [status, setStatus]= useState(null);
  const [pressable, setPressable]= useState(false);
  const {navigation: { goBack }, user, sendMessageApi} = props;

  // console.log(user)
    return (
        <KeyboardAwareScrollView style={styles.container}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={false}
        >
          <TouchableOpacity 
              onPress={()=>goBack()}
           >
            <Ionicons name="chevron-back" size={23} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Contact Us</Text>
          {message !=""&& message !="null" && status !== 200 && <Text style={styles.errorText}>{message}</Text>}
          {message !=""&& message !="null" && status === 200 && <Text style={styles.sucText}>{message}</Text>}
          <Spinner visible={loading}/>
          <Formik
            initialValues={{ title: '', msg:'' }}
            onSubmit={values => 
              {
                setLoading(true);
                if(values.msg == "" | values.title == ""){
                  setLoading(false);
                  setMessage("Sorry! one or both fields is empty")
                  setTimeout(() => {
                    setStatus(205)
                    setMessage("")
                  }, 3000)
                }else{
                  const data = {
                    title: values.title,
                    message: values.msg,
                    user_id: user.user_id
                  }
                  // console.log(data)
                  sendMessageApi(data).then(res=>{
                    // console.log(res)
                    if (res){
                      setLoading(false);
                      setMessage(res.message)
                      setStatus(res.status)
                      setTimeout(() => {
                        setMessage("");
                        setStatus(null)
                      }, 3000)
                      
                    }
                  })
                }
                
              }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.formContainer}>
                <Text style={styles.titleText}>Title</Text>
                <TextInput
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                  style={styles.inputTitle}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <Text style={styles.titleText}>Message</Text>
                <TextInput
                  onChangeText={handleChange('msg')}
                  onBlur={handleBlur('msg')}
                  value={values.msg}
                  multiline={true}
                  numberOfLines={15}
                  style={styles.inputTitle2}
                  autoCapitalize='none'
                  autoCorrect={false}
 
                />
              
               
                <ButtonWhite onPress={handleSubmit} buttonText="Send Message" />
               
              </View>
            )}
          </Formik>
            
            <View style={styles.mailDiv}>
            <Text style={styles.titleText2}>or mail us at</Text>
            <Text style={styles.titleText2}>info@wastecoin.co</Text>
            </View>
        </KeyboardAwareScrollView>
        
    )
}
// export default ProfileScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    fl_data: state.fl_data,
    // followers:state.followers,
    // following:state.following,
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    sendMessageApi: bindActionCreators(sendMessage, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUs);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#4F9A51",
      padding:"5%",
      paddingTop:"10%"
    },
    titleText:{
      color:"#fff",
      fontFamily:"Rubik300",
      marginTop:30,
      marginBottom:10,
    },
    mailDiv:{
      width:"100%",
      marginTop:20,
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
    },
    titleText2:{
      color:"#fff",
      fontFamily:"Rubik300",
      marginTop:10,
      fontSize:20,
      // marginBottom:10,
    },
    inputTitle:{
      backgroundColor:"#5AB15C",
      height:45,
      paddingLeft:20,
      color:"#fff",
      fontFamily:"Rubik300",
      paddingRight:20,
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
    headerText:{
      color:"#fff",
      fontFamily:"Rubik300",
      marginTop:10,
    },
    errorText:{
      padding:"5%",
      marginTop:20,
      backgroundColor:"#FFCDB7",
      borderRadius:5,
      textAlign:"center",
    },
    sucText:{
      padding:"5%",
      marginTop:20,
      backgroundColor:"#21A288",
      borderRadius:5,
      color:"#fff",
      textAlign:"center",
    },
   
  });