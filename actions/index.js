// import { fetchUser, signupApi } from '../utils/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseUrl = "http://127.0.0.1:8000";
// const baseUrl = "https://wc-delta-api.herokuapp.com"
const baseUrl = "https://wastecoin-marketplace.herokuapp.com"
// export const STORAGE_KEY = 'wastecoin_delta';

export const USER_DATA = 'USER_DATA';
// export const ADD_DECK = 'ADD_DECK';
// export const ADD_CARD = 'ADD_CARD';

export function receiveUser (user, user_id) {
  return {
    type: USER_DATA,
    user,
    user_id
  }
}

// function addDeck (deck) {
//   return {
//     type: ADD_DECK,
//     deck,
//   }
// }

// function addCard (card, deckTitle) {
//   return {
//     type: ADD_CARD,
//     card,
//     deckTitle
//   }
// }


// export function createCard (card, deckTitle) {
//   return async (dispatch) => {
//     await submitCard(deckTitle, card);
//     dispatch(addCard(card, deckTitle));
//   }
// }

// export function createDeck (deck) {
//   return (dispatch) => {
//     submitDeck(deck.title, deck);
//     dispatch(addDeck(deck));
//   }
// }

// export function getUser () {
//   return (dispatch) => {
//     return fetchUser()
//     // return fetchUser().then((user)=>{
//     //   dispatch(receiveUser(user))
//     // }).then(console.log(user))
//   }
// }

// export function SignUp (data) {
//   return (dispatch) => {
//     signupApi(data);
//   }
// }
// export function SignUp (data) {
//   return (dispatch) => {
//     return signupApi(data).then((data)=>{
//       dispatch(receiveDecks(data))
//     })
//   }
// }



export function SignUp (data) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    // const res = await axios.post(`${baseUrl}/v1/signup`, data, config)
    const res = await axios.post(`${baseUrl}/api/v1/user/register`, data, config)
    // if(res.data.status === 200){
    //   dispatch(receiveUser(data, res.data._id))
    // }
    return res.data;
  }
}
export function SignIn (data) {
  
  return async (dispatch) => {
    // console.log(data)
    // const res = await axios.post(`${baseUrl}/v1/signin`, data)
    const res = await axios.post(`${baseUrl}/api/v1/user/login`, data)
    if(res.data.data !== null){
      try {
        await AsyncStorage.setItem("token", res.data.token);
        // console.log("User token:",res.data.token );
        dispatch(receiveUser(res.data.data, res.data.data._id))
        // const config = {
        //   headers: {
        //     "Content-Type": "application/json",
        //     'Authorization': `Bearer ${res.data.token}`
        //   },
          
        // };
        // const res2 = await axios.post(`${baseUrl}/api/v1/user-info`, config)
        // console.log("hi")
        // console.log("user-info",res2)
     } catch (err) {
        console.warn(err);
     } 
    }
    // console.log("Id:", res.data.token)
    return res.data;
    // console.log()
    
  }
}


export function activateAccount (data) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    const res = await axios.post(`${baseUrl}/v1/verify`, data, config)
    console.log(res)
    return res.data;
  }
}

export function Snap (data) {
  // console.log(data)
  
  const getToken = async ()=>{  
    try{  
      let token = await AsyncStorage.getItem('token');   
      return token
      // console.log(token)
    }  
    catch(error){  
      console.log(error)  
    }  
  }  
  // getToken() 
  // console.log(token)
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      'Authorization': `Bearer ${getToken()}`
    },
  };
  return async (dispatch) => {
    // const res = await axios.post(`${baseUrl}/v1/aws`, data, config)
    const res = await axios.post(`${baseUrl}/api/v1/transaction/upload`, data, config)
    // console.log(res.data)
    return res.data;
  }
}
