// import { fetchUser, signupApi } from '../utils/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseUrl = "http://127.0.0.1:/8000";
const baseUrl = "https://wc-delta-api.herokuapp.com"


export const USER_DATA = 'USER_DATA';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const CLAIM_BONUS = 'CLAIM_BONUS';
export const UPDATE_BONUS_STATE = 'UPDATE_BONUS_STATE';
export const RESTART_BONUS_STATE = 'RESTART_BONUS_STATE';

export function receiveUser (user_id, user_data, tx_data, fl_data) {
  return {
    type: USER_DATA,
    user_id,
    user_data,
    tx_data, 
    fl_data
  }
}


// export const getToken = async ()=>{  
//   try{  
//     let token = await AsyncStorage.getItem('token');  
//     return token
//   }  
//   catch(error){  
//     console.log(error)  
//   }  
// }

 export function addToken (amount) {
  return {
    type: ADD_TOKEN,
    amount,
  }
}

export function addTx (tx_data) {
  return {
    type: ADD_TRANSACTION,
    tx_data,
  }
}

export function claimBonus (coin) {
  return {
    type: CLAIM_BONUS,
    coin,
  }
}

export function updateBonusState (bonusName) {
  return {
    type: UPDATE_BONUS_STATE,
    bonusName,
  }
}
export function restartBonusState () {
  return {
    type: RESTART_BONUS_STATE,
  }
}

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
    try{
      const res = await axios.post(`${baseUrl}/v1/signup`, data, config)
      if(res.data.status == 200){
          await AsyncStorage.setItem("token", res.data.user_id);
      }
      return res.data;
    }
    catch (err) {
      // return "Sorry! an error Occured."
      return err
    }
  }
}
export function SignIn (data) {
  
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/v1/signin`, data)
      // console.log(res)
      if(res.data.status == 200){
          await AsyncStorage.setItem("token", res.data.user_id);
          dispatch(receiveUser(res.data.user_id, res.data.user_data, res.data.tx_data, res.data.fl_data))
      }
      return res.data;
    }
   catch (err) {
    return err
    // return "Sorry! an error Occured."
 }   
  }
}
export function sendMessage (data){
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/v1/sendMessage`, data)
      return res.data;
    }
   catch (err) {
    return err
    // return "Sorry! an error Occured."
 }   
  }
}

export function activateAccount (data) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try{
      const res = await axios.post(`${baseUrl}/v1/verify`, data, config)
      return res.data;
    }
    catch (err) {
      return err
      // return "Sorry! an error Occured."
    }
    // try {
    //   const res = await axios.post(`${baseUrl}/v1/verify`, data, config)
    //   return res.data;
    // } catch (err) {
    //   console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
    // }
  }
}

export function getDollar(){
  var options = {
    method: 'GET',
    url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/latest',
    params: {base: 'USD', symbols: 'GBP,JPY,EUR'},
    headers: {
      'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
      'x-rapidapi-key': 'a6e7f8cabamsh1ea4ecab6649a58p1c0a96jsn631ceaa8bac4'
    }
  };
  return async (dispatch) => {
    // console.log(data)
    try{
      axios.request(options)
      const res = await axios.request(options)
      if(res.data.success ===true){
        try {
            return res.data;
        } catch (err) {
          return err
        } 
      }
      else{
        return res.data;
      }
    }
    catch (err) {
      return err
      // return "Sorry! an error Occured."
    }
  }
}

export function Snap (data) {

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      // 'Authorization': `Bearer ${getToken()}`
    },
  };
  return async (dispatch) => {
    // console.log(data)
    try{
      const res = await axios.post(`${baseUrl}/v1/aws`, data, config)
      if(res.data.status == 200 & res.data.success ===true){
        try {
          dispatch(addToken(parseFloat(0.10)))
          dispatch(addTx(res.data.tx_data))
            return res.data;
        } catch (err) {
          return err
        } 
      }
      else{
        return res.data;
      }
    }
    catch (err) {
      return err
      // return "Sorry! an error Occured."
    }
  }
}


export function ClaimBonus (data) {

  const config = {
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer ${getToken()}`
    },
  };
  return async (dispatch) => {
    try{
      const res = await axios.post(`${baseUrl}/v1/bonus`, data, config)
      if(res.data.status == 200 & res.data.success ===true){
        try {
          dispatch(claimBonus(parseFloat(data.coin)))
          dispatch(addTx(res.data.tx_data))
            return res.data;
        } catch (err) {
          return err
        } 
      }
      else{
        return res.data;
      }
    }
    catch (err) {
      return err
      // return "Sorry! an error Occured."
    }
    // try {
    //   const res = await axios.post(`${baseUrl}/v1/bonus`, data, config)
    //   if(res.data.status == 200 & res.data.success ===true){
    //     dispatch(claimBonus(parseFloat(data.coin)))
    //     dispatch(addTx(res.data.tx_data))
    //   }
    //   return res.data;
    // } catch (err) {
    //   console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
    // }
  }
}

export function UpdateBonusState (bonusName) {
  return async (dispatch) => {
    dispatch(updateBonusState(bonusName))
  }
}

export function RestartBonusState () {
  return async (dispatch) => {
    dispatch(restartBonusState())
  }
}