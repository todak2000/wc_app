// import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const STORAGE_KEY = 'wastecoin_delta';

// const data = {
//   React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// };

function setData () {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(response));
      // console.log(response);
      return response;
        // console.log('getting data from axios', response.data);
        // setTimeout(() => {
        //     this.setState({
        //         loading: false,
        //         axiosData: response.data
        //     })
        // }, 2000)
    })
    .catch(error => {
        console.log(error);
    });
  
}

export function formatResults (res) {
  return res === null ? setData() : JSON.parse(res);
}

// export async function getItemByKey(key) {
//   const decks = await AsyncStorage.getItem(STORAGE_KEY)
//     .then(formatResults);
//   return  decks[key]
// }