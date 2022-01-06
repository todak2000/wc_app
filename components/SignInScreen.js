import React, {useState, useEffect} from 'react'
import { Text,StyleSheet, View, TextInput} from 'react-native'
import LoginTop from './AuthComponents/LoginTop'
import SignInButton from './AuthComponents/Button'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { SignIn } from '../actions/index';
import { Formik } from 'formik';
import {Ionicons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';


 function SignInScreen(props){
  const {navigation, signInApi} = props;
  const [showPassword, setShowPassword]= useState(true);
  const [message, setMessage]= useState("");
  const [loading, setLoading] = useState(false);
  const [userid, setUserid] = useState(null);
  useEffect(() => {
    setLoading(true);
    const userID = async ()=>{  
      try{  
        let user = await AsyncStorage.getItem('user_id');  
         
        // return user 
        setUserid(user)
        setLoading(false);
        if(userid !== null){
          navigation.navigate("Home")
        }
      }  
      catch(error){  
        return error 
      }  
    }  
    userID()
    setMessage(props.route.params.message);
  }, []);
    return (

        <View style={styles.container}>
          <LoginTop headerText="Welcome back" subHeader= "We always love to have you here"/>
          {message !=""&& message !="null" && <Text style={styles.errorText}>{message}</Text>}
          <Spinner visible={loading}/>
          <Formik
            initialValues={{ email: '', password:'' }}
            onSubmit={values => 
              {
                setLoading(true);
                const data = {
                  email: values.email,
                  password: values.password,
                  // type:"manual"

                }
                // console.log(data)
                signInApi(data).then(res=>{
                  // console.log(res)
                  if (res){
                    if (res.status === 200){
                      setTimeout(() => {
                        setLoading(false);
                        setMessage("")
                        navigation.navigate("Home")
                      }, 3000)
                    }
                    else if (res.status === 205){
                      setLoading(false);
                      setMessage(res.message)
                      setTimeout(() => {
                        setMessage("")
                        navigation.navigate("Verification")
                      }, 3000)
                    }
                    else {
                      setLoading(false);
                      setMessage(res.message)
                    }
                  }
                }
                )
              }
            }
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.formContainer}>
                <Text>Email address</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.formInput}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <Text>Password</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={showPassword}
                  style={styles.formInput}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                {showPassword ?
                 <Ionicons name="eye-outline" size={20} color="#094850" style={styles.formEye} onPress={()=>{setShowPassword(false)}}/>
                 :
                 <Ionicons name="eye-off-outline" size={20} color="#094850" style={styles.formEye} onPress={()=>{setShowPassword(true)}}/>
                }
                <Text style={styles.forgotText} onPress={()=>navigation.navigate("ForgotPassword")}>Forgot Password</Text>
                <SignInButton onPress={handleSubmit} buttonText="Log in" />
                <Text style={styles.createText} onPress={()=>navigation.navigate("SignUp")}>Do not have an account? Create</Text>
              </View>
            )}
          </Formik>
        </View>
        
    )
}
// export default SignInScreen
function mapStateToProps (state) {
  return {
    user: state.user,
    user_id: state.user_id
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    signInApi: bindActionCreators(SignIn, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    formContainer: {
      width:"100%",
      paddingTop:40,
      paddingBottom:40,
      paddingLeft:20,
      paddingRight:20,
      // backgroundColor:"#4F9A51",
    },
    formInput:{
      borderWidth:1,
      borderColor:"#0F0F0F",
      borderRadius: 5,
      height: 46,
      marginTop:15,
      fontFamily:'Rubik',
      marginBottom:15,
      paddingLeft:10,
      paddingRight:40,

    },
    formEye:{
      marginTop:-50,
      marginLeft:"90%",
      marginBottom:20,
    },
    forgotText:{
      textAlign:"right",
      fontSize:14,
      fontFamily:'Rubik',
      color:"#87DC7A",
    },
    createText:{
      textAlign:"center",
      fontSize:14,
      fontFamily:'Rubik',
      color:"#87DC7A",
      marginTop:30,
    },
    errorText:{
      padding:"5%",
      backgroundColor:"#FFCDB7",
      borderRadius:5,
      textAlign:"center",
    },
  });