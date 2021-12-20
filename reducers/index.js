import { USER_DATA } from '../actions/index';

const store = {
  user: {},
};

function reducer (state = store, action) {
  switch (action.type) {
    case USER_DATA :
      return {
        ...state,
        user: action.user,
        user_id:action.user_id
      };
    // case ADD_DECK :
    //   return {
    //     ...state,
    //     decks: {
    //       ...state.decks,
    //       [action.deck.title] : action.deck
    //     }
    //   };
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
