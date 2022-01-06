import React, {useState} from 'react'
import { Text,StyleSheet, View, TextInput, FlatList, TouchableOpacity} from 'react-native'
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUpButton from './AuthComponents/ButtonWhite'
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { SignUp } from '../actions/index';

 function SignUpScreen(props){
  const {navigation, signUpApi} = props;
  const [showPassword, setShowPassword]= useState(true);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [countryCode, setCountryCode] = useState('+67');
  const [country, setCountry] = useState('Select');
  const [showCountry, setShowCountry] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorArea, setErrorArea] = useState(false);

  const getPhone =(country)=>{
    if (country === "Saudi Arabia"){
      setCountryCode('+35')
    }
    else if(country === "Nigeria"){
      setCountryCode('+234')
    }
    else if(country === "United Kingdom"){
      setCountryCode('+44')
    }
    else if(country === "Other"){
      setCountryCode('+00')
    }
  }
    return (

        <View style={styles.container}>
          <Spinner visible={loading}/>
            <Text style={styles.HeaderText}>Create an Account</Text>
            <Formik
            initialValues={{ username: '', email:'', password:'', phone:'', area:'', code:'' }}
            onSubmit={values => 
              {
                // navigation.navigate("Verification")
                if(values.username ==''){
                  setErrorUsername(true)
                }
                else if(values.email ==''){
                  setErrorEmail(true)
                }
                else if(values.phone ==''){
                  setErrorPhone(true)
                }
                else if(values.area ==''){
                  setErrorArea(true)
                }
                else if(values.password =='' || values.password.length <6){
                  setErrorPassword(true)
                }
                else{
                   const data = {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    phone: countryCode + values.phone,
                    area:values.area,
                    code:values.code,
                    countryCode:countryCode, 
                    country:country

                  }
                  // console.log(data)
                  setLoading(true);
                  signUpApi(data).then(res=>{
                    if (res){
                      console.log(res)
                      if (res.status === 200){
                        setTimeout(() => {
                          setLoading(false);
                          // navigation.navigate("SignIn")
                          navigation.navigate("Verification")
                        }, 3000)
                      }
                      else{
                        setLoading(false);
                        setErrorMessage(res.message)
                        setTimeout(() => {
                          setErrorMessage(false)
                        }, 3000)
                      }
                    }
                  })
                
                }
                setTimeout(() => {
                  setErrorArea(false)
                  setErrorPhone(false)
                  setErrorUsername(false)
                  setErrorEmail(false)
                  setErrorPassword(false)
                }, 3000)
              }
            }
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.formContainer}>
                {errorMessage !=""&& errorMessage !="null" && <Text style={styles.errorText}>{errorMessage}</Text>}
                <Text style={styles.formText}>Username</Text>
                <TextInput
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  style={errorUsername ? styles.formInputRed: styles.formInput}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <Text style={styles.formText}>Email address</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={errorEmail ? styles.formInputRed: styles.formInput}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <View style={styles.flexRow2}>
                <Text style={styles.formText}>Country</Text>
                <Text style={styles.formText}>Area/Region/State</Text>
                </View>
                <View style={styles.flexRow}>
                <TextInput
                  onChangeText={handleChange('country')}
                  onBlur={handleBlur('country')}
                  value={values.country}
                  style={styles.formCountry}
                  editable = {false}
                />
                
                <TextInput
                  onChangeText={handleChange('area')}
                  onBlur={handleBlur('area')}
                  value={values.area}
                  style={errorArea ? styles.formCountryRed: styles.formCountry}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                </View >
                {errorArea !=""&& <Text style={styles.redText}>{errorArea}</Text>}
                <TouchableOpacity style={showCountry ? styles.formCountriShow: styles.formCountri}>
                  <FlatList
                    data={[
                      {country: country , key: country},
                      {country: 'United Kingdom', key:1},
                      {country: 'Saudi Arabia' , key:2},
                      {country: 'Nigeria' , key:3},
                      {country: 'Other', key:5},
                    ]}
                    renderItem={({item}) =>
                      <Text style={styles.itemCountry}
                      key={item.key}
                      onPress={()=>{
                        if(showCountry){
                          setShowCountry(false)
                          
                        }
                        else{
                          setShowCountry(true)
                        }
                        setCountry(item.country)
                        getPhone(item.country)
                      }}
                      >
                        {item.country}
                      </Text>
                    }
                  />
                  <Ionicons name="chevron-down" size={15} color="#0F0F0F" onPress={()=>{setShowCountry(true); }}/>
                </TouchableOpacity>
                <Text style={styles.formText}>Phone Number</Text>
                <TextInput
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  maxLength={13}
                  style={errorPhone ? styles.formInputPhoneRed: styles.formInputPhone}
                />
                <View style={styles.formTel}>
                    <Text style={styles.item}>{countryCode}</Text>
                </View>
                
                <Text style={styles.formText}>Password</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={showPassword}
                  style={errorPassword ? styles.formInputRed: styles.formInput}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                {showPassword ?
                <Ionicons name="eye-outline" size={20} color="#094850" style={styles.formEye} onPress={()=>{setShowPassword(false)}}/>
                :
                <Ionicons name="eye-off-outline" size={20} color="#094850" style={styles.formEye} onPress={()=>{setShowPassword(true)}}/>
                }
                {errorPassword !=""&& <Text style={styles.redText}>{errorPassword}</Text>}
                <Text style={styles.formText}>Referal Code</Text>
                <TextInput
                  onChangeText={handleChange('code')}
                  onBlur={handleBlur('code')}
                  value={values.code}
                  style={styles.formInput}
                  placeholder="e.g. WTU0000"
                  maxLength={7}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
                <SignUpButton onPress={handleSubmit} buttonText="Create an Account" />
                <Text style={styles.createText} onPress={()=>navigation.navigate("SignIn")}>Already have account? Log in</Text>
              </View>
            )}
          </Formik> 
        </View>
        
    )
}
// export default SignUpScreen
function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    signUpApi: bindActionCreators(SignUp, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#4F9A51",
      padding:"7%",
      paddingTop:"10%",
    },
    spinnerTextStyle: {
      color: '#FFF',
    },
    flexRow:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    flexRow2:{
      flexDirection:"row",
      justifyContent:"space-between",
      // marginTop:15,
    },
    HeaderText:{
      fontSize:20,
      fontFamily:'Rubik',
      color:"#ffffff",
      marginBottom:10,
      marginTop:0,
    },
    errorText:{
      padding:"5%",
      backgroundColor:"#FFCDB7",
      borderRadius:5,
      textAlign:"center",
    },
    redText:{
      color:"#C85929",
    },
    formInput:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      backgroundColor:"#fff",
      marginTop:7,
      fontFamily:'Rubik',
      marginBottom:10,
      paddingLeft:10,
      paddingRight:40,

    },
    formInputPassword:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      backgroundColor:"#fff",
      marginTop:7,
      fontFamily:'Rubik',
      marginBottom:70,
      paddingLeft:10,
      paddingRight:40,

    },
    formInputRed:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      backgroundColor:"#F7C9CF",
      marginTop:7,
      color:"#FF4900",
      fontFamily:'Rubik',
      marginBottom:20,
      paddingLeft:10,
      paddingRight:40,

    },
    formCountry:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      backgroundColor:"#fff",
      marginTop:7,
      width:"48%",
      fontFamily:'Rubik',
      marginBottom:20,
      paddingLeft:10,
      paddingRight:40,

    },
    formCountryRed:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      backgroundColor:"#F7C9CF",
      marginTop:7,
      color:"#FF4900",
      width:"48%",
      fontFamily:'Rubik',
      marginBottom:20,
      paddingLeft:10,
      paddingRight:40,

    },
    formInputPhoneRed:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      color:"#FF4900",
      backgroundColor:"#F7C9CF",
      marginTop:7,
      fontFamily:'Rubik',
      marginBottom:20,
      paddingLeft:80,
      paddingRight:40,

    },
    formInputPhone:{
      borderWidth:1,
      borderColor:"#fff",
      borderRadius: 4,
      height: 46,
      backgroundColor:"#fff",
      marginTop:7,
      fontFamily:'Rubik',
      marginBottom:20,
      paddingLeft:60,
      paddingRight:40,

    },
    formEye:{
      marginTop:-45,
      marginLeft:"90%",
      marginBottom:30,
    },
    formTel:{
      backgroundColor:"#4F9A51",
      marginTop:-60,
      marginBottom:30,
      width:"15%",
      padding:7,
      borderRadius:5,
      marginLeft:5,
      height:34,
      flexDirection:"row"
    },
    formCountri:{
      marginTop:-60,
      marginBottom:30,
      width:"45%",
      padding:7,
      borderRadius:5,
      marginLeft:5,
      height:34,
      flexDirection:"row"
    },
    formCountriShow:{
      backgroundColor:"#fff",
      marginTop:-60,
      marginBottom:20,
      width:"45%",
      padding:7,
      borderRadius:5,
      marginLeft:5,
      height:150,
      flexDirection:"row"
    },
    formTelShow:{
      marginTop:-60,
      marginLeft:5,
      backgroundColor:"#4F9A51",
      padding:10,
      width:"24%",
      marginBottom:20,
      borderRadius:5,
    },
    item:{
      fontSize:14,
      fontFamily:'Rubik',
      color:"#F7B686",
      marginBottom:5,
    },
    itemCountry:{
      fontSize:14,
      fontFamily:'Rubik',
      color:"#0F0F0F",
      marginBottom:10,
      padding:10,
      paddingTop:0,
      paddingLeft:0,
      // backgroundColor:"#ff0"
    },
    forgotText:{
      textAlign:"right",
      fontSize:14,
      fontFamily:'Rubik',
      color:"#87DC7A",
      
    },
    formText:{
      fontSize:14,
      fontFamily:'Rubik',
      color:"#fff",
    },
    createText:{
      textAlign:"center",
      fontSize:14,
      fontFamily:'Rubik',
      color:"#FFDBA7",
      marginTop:30,
    }
  });