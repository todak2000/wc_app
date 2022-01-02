// import { fetchUser, signupApi } from '../utils/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseUrl = "http://127.0.0.1:8000";
const baseUrl = "https://wc-delta-api.herokuapp.com"
// const baseUrl = "https://wastecoin-marketplace.herokuapp.com"
// export const STORAGE_KEY = 'wastecoin_delta';

export const USER_DATA = 'USER_DATA';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const CLAIM_BONUS = 'CLAIM_BONUS';
export const UPDATE_BONUS_STATE = 'UPDATE_BONUS_STATE';
export const RESTART_BONUS_STATE = 'RESTART_BONUS_STATE';

export function receiveUser (user_id, user_data, tx_data) {
  return {
    type: USER_DATA,
    user_id,
    user_data,
    tx_data
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
    const res = await axios.post(`${baseUrl}/v1/signup`, data, config)
    if(res.data.status == 200){
      try {
        await AsyncStorage.setItem("token", res.data.user_id);
        // dispatch(receiveUser(res.data.user_id))
     } catch (err) {
        console.error(err);
     } 
    }
    // const res = await axios.post(`${baseUrl}/api/v1/user/register`, data, config)
    // if(res.data.status === 200){
    //   dispatch(receiveUser(data, res.data._id))
    // }
    return res.data;
  }
}
export function SignIn (data) {
  
  return async (dispatch) => {
    // console.log(data)
    const res = await axios.post(`${baseUrl}/v1/signin`, data)
    console.log(res.data)
    if(res.data.status == 200){
      try {
        await AsyncStorage.setItem("token", res.data.user_id);
        dispatch(receiveUser(res.data.user_id, res.data.user_data, res.data.tx_data))
     } catch (err) {
        console.error(err);
     } 
    }
    return res.data;
    
  }
}


export function activateAccount (data) {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}/v1/verify`, data, config)
      return res.data;
    } catch (err) {
      console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
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
    try {
      const res = await axios.post(`${baseUrl}/v1/aws`, data, config)
      if(res.data.status == 200 & res.data.success ===true){
        dispatch(addToken(parseFloat(0.10)))
        dispatch(addTx(res.data.tx_data))
      }
      return res.data;
    } catch (err) {
      console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
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
    try {
      const res = await axios.post(`${baseUrl}/v1/bonus`, data, config)
      if(res.data.status == 200 & res.data.success ===true){
        dispatch(claimBonus(parseFloat(data.coin)))
        dispatch(addTx(res.data.tx_data))
      }
      return res.data;
    } catch (err) {
      console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
    }
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