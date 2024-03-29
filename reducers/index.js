import { USER_DATA, ADD_TOKEN, ADD_TRANSACTION, CLAIM_BONUS, UPDATE_BONUS_STATE, RESTART_BONUS_STATE } from '../actions/index';

const store = {
  user: {
    user_id: "",
    username:"",
    email: "",
    country: "",
    tokenBalance:0,
    phone: "",
    recycleCount:0,
    dailyBonus:false
  },
  tx_data:{},
  fl_data:{},
  // following:0,
  followers:0,
  refCode:"WC0000",
  bonusOne:{
    type:"question",
    bonus:"Do you know that recycling rate has not improved since the 80s. it has been less than 20% since then.",
    timer:5000,
    done:false,
    coin:0.5,
  },
  bonusTwo:{
    type:"video",
    url:"https://youtu.be/0vCY3k3ffGQ",
    timer:30000,
    done:false,
    coin:1,
  },
  bonusThree:{
    type:"other",
    bonus:"Scan 10 recyclables today",
    done:false,
    coin:0.5,
  },
  bonusDone:false,
  date:new Date(),
  dailyRecyclingCount:0,
  
};

function reducer (state = store, action) {
  switch (action.type) {
    case USER_DATA :
      return {
        ...state,
        user: {
          user_id : action.user_id,
          username:action.user_data.username,
          email: action.user_data.email,
          country: action.user_data.country,
          tokenBalance:action.user_data.tokenBalance,
          phone: action.user_data.phone,
          recycleCount:action.user_data.recycleCount,
        }, 
        tx_data:action.tx_data,
        fl_data:action.fl_data,
        refCode:action.user_id,
        followers:action.user_data.followersCount,
        bonusOne : {
          ...state.bonusOne,
          done: action.user_data.dailyBonusOneDone,
          bonus: action.user_data.bonusOne,
          coin: action.user_data.bonusOneCoin,
        },
        bonusTwo : {
          ...state.bonusTwo,
          done: action.user_data.dailyBonusTwoDone,
          url: action.user_data.bonusTwo,
          coin: action.user_data.bonusTwoCoin,
        },
        bonusThree : {
          ...state.bonusThree,
          done: action.user_data.dailyBonusThreeDone,
        },
      };
    case ADD_TOKEN :
      return {
        ...state,
        user: {
          ...state.user,
          tokenBalance : state.user.tokenBalance+action.amount,
          recycleCount:state.user.recycleCount+ 1,
        },
        dailyRecyclingCount: state.dailyRecyclingCount+1
      };
      case ADD_TRANSACTION :
      return {
        ...state,
        tx_data:action.tx_data,
      };
      case CLAIM_BONUS :
      return {
        ...state,
        user: {
          ...state.user,
          tokenBalance : state.user.tokenBalance+action.coin,
        }
      };
      case UPDATE_BONUS_STATE :
      return {
        ...state,
          [action.bonusName] : {
            ...state[action.bonusName],
            done: true
          },
          bonusDone:true,
          date:new Date()
      };
      case RESTART_BONUS_STATE :
      return {
        ...state,
          bonusOne : {
            ...state.bonusOne,
            done: false
          },
          bonusTwo : {
            ...state.bonusTwo,
            done: false
          },
          bonusThree : {
            ...state.bonusThree,
            done: false
          },
          bonusDone:false,
      };
    // case ADD_CARD :
    //   return {
    //     ...state,
    //     decks: {
    //       ...state.decks,
    //       [action.deckTitle] : {
    //         ...state.decks[action.deckTitle],
    //         questions: state.decks[action.deckTitle].questions.concat([action.card])
    //       }
    //     }
    //   };
    default :
      return state
  }
}
export default reducer
