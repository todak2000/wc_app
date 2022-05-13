import React, {useState, useEffect} from 'react'
import { Text,StyleSheet, View, TextInput} from 'react-native'
import Top from '../components/AuthComponents/ForgotTopComponent'
import Button from './AuthComponents/Button'
import ForgotImage from '../components/AuthComponents/ForgotSVG'
import { Formik } from 'formik';

 function ForgotPasswordScreen(props){
  
  const {navigation} = props
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    setShowResult(false);
  }, []);
    return (

        <View style={styles.container}>
          <Top navigation={navigation} textHeader="Forgot Password"/>
          <View style={styles.containerWhite}>
            
            <Formik
              initialValues={{ email: '' }}
              onSubmit={values => 
                {
                  // console.log(values)
                  setShowResult(true)
                  // return values
                  // navigation.navigate("Home",  {data: values})
                }
              }
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.formContainer}>
                  {showResult && <Text style={styles.result}> Sent to your email</Text>}
                  <ForgotImage />
                  <Text style={styles.formText}>Email address</Text>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.formInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                  <Text style={styles.formText2}>Please ensure it is an active mail and it is the one used during registration</Text>
                  <Button onPress={handleSubmit} buttonText="Retrieve Password" />
                </View>
              )}
            </Formik>
          </View>

        </View>
        
    )
}
export default ForgotPasswordScreen
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor:"#4F9A51",
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
      // alignItems: 'center',
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
      height: 46,
      marginTop:15,
      backgroundColor:"#FFF6EF",
      fontFamily:'Rubik',
      marginBottom:15,
      paddingLeft:10,
      paddingRight:40,

    },
    result:{
      backgroundColor:"#026551",
      color:"#fff",
      padding:"5%",
      textAlign:"center",
    }
  });