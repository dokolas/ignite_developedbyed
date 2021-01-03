// setting initial state for reducer
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    search: []
}

const gamesReducer = (state = initState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            //returned payload because in action, we are configuring a payload, must be here too
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
        default:
            return {...state}
    }
};

export default gamesReducer;