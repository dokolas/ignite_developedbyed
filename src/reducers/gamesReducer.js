// setting initial state for reducer
const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      //returned payload because in action, we are configuring a payload, must be here too
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return { ...state, searched: action.payload.searched };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [], //this clears it all
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
