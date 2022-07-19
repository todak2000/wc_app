// import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY,formatResults} from './data'
import axios from 'axios';

// const baseUrl = "http://127.0.0.1:8000"
const baseUrl = "wc-delta-api.herokuapp.com"
export function fetchUser ( ){
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      // AsyncStorage.setItem("userInfo", JSON.stringify(response));
      console.log(response);
      // return response;
        // console.log('getting data from axios', response.data);
        // setTimeout(() => {
        //     this.setState({
        //         loading: false,
        //         axiosData: response.data
        //     })
        // }, 2000)
    })
    .catch(error => {
        return error
    });
  // return "no user"
  // return AsyncStorage.getItem(STORAGE_KEY)
  //   .then(formatResults)
}

export async function signupApi(data){
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios.post(`${baseUrl}/v1/signup`, data, config)
    .then(response => {
      
      if(response){
        if (response.data.success === true & response.data.status === 200){
          // AsyncStorage.setItem("userInfo", JSON.stringify(response.data));
          // const userData = AsyncStorage.getItem("userInfo")
          // console.log(userData)
          // return response.data
          
          // history.push("/home");
        }
        else{
          // console.log(response.data)
          
          return response.data

        }
      }
      // return response.data;
      // AsyncStorage.setItem("userInfo", JSON.stringify(response));
      // const userData = localStorage.getItem("userInfo")
      // console.log(userData)
      // return response;
    })
    .catch(error => {
        return error
    });
    
}

// export function submitDeck (key, deck) {
//   return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
//     [key]: deck
//   }));
// }

// export async function submitCard (key, card) {
//   const deck = await getItemByKey(key);
//   deck.questions.push(card);
//   submitDeck(key, deck);
// }