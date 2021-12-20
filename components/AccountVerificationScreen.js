import React, {useState, useEffect} from 'react'
import { Text,StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import Top from './AuthComponents/ForgotTopComponent'
import Button from './AuthComponents/Button'
import ForgotImage from './AuthComponents/ForgotSVG'
import { Formik } from 'formik';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { activateAccount } from '../actions/index';


 function AccountVerificationScreen(props){
  
  const {navigation, activateAccountApi, user_id} = props
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage("");
  }, []);
    return (

        <View style={styles.container}>
          <Top navigation={navigation} textHeader="Accout Verification"/>
          <View style={styles.containerWhite}>
          <Spinner visible={loading}/>
            <Formik
              initialValues={{ code: '' }}
              onSubmit={values => 
                {
                  const data = {
                    code: values.code,
                    user_id: user_id,

                  }
                  activateAccountApi(data).then(res=>{
                    if (res){
                      if (res.success ===true && res.status === 200){
                        setTimeout(() => {
                          setLoading(false);
                          navigation.navigate("SignIn")
                        }, 3000)
                      }
                      else{
                        setLoading(false);
                        setMessage(res.message)
                        setTimeout(() => {
                          setMessage("")
                        }, 3000)
                      }
                    }
                  })
                }
              }
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.formContainer}>
                  {message !=="" && <Text style={styles.result}> {message}</Text>}
                  <ForgotImage />
                  <Text style={styles.formText}>Enter Verification Code</Text>
                  <TextInput
                    onChangeText={handleChange('code')}
                    onBlur={handleBlur('code')}
                    value={values.code}
                    style={styles.formInput}
                    maxLength={4} 
                    keyboardType="numeric"
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                  <TouchableOpacity>
                  <Text style={styles.formText2}>Resent ActivationCode</Text>
                  </TouchableOpacity>
                  <Button onPress={handleSubmit} buttonText="Activate Account" />
                </View>
              )}
            </Formik>
          </View>

        </View>
        
    )
}
// export default AccountVerificationScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    user_id: state.user_id
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    activateAccountApi: bindActionCreators(activateAccount, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountVerificationScreen);
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"#4F9A51",
    },
    formContainer:{
      alignItems: 'center',
    },
    containerWhite:{
      height:"80%",
      position:"absolute",
      bottom:0,
      backgroundColor:"#fff",
      width:"100%",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:20,
      alignContent:"center",
      flexDirection:"row",
      justifyContent: 'center'
    },
    formText:{
      textAlign:'center',
    },
    formText2:{
      textAlign:'center',
      marginTop:20,
      marginBottom:50,
    },
    formInput:{
      borderWidth:1,
      borderColor:"#F7B686",
      borderRadius: 5,
      height: 55,
      marginTop:15,
      width:"70%",
      backgroundColor:"#FFF6EF",
      fontFamily:'Rubik',
      marginBottom:15,
      fontSize:40,
      textAlign:"center",
      // paddingLeft:10,
      // paddingRight:40,

    },
    result:{
      backgroundColor:"#FFCDB7",
      color:"#000",
      padding:"5%",
      textAlign:"center",
    }
  });