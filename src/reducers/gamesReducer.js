


// setting initial state for reducer
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    search: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {...state}
        default:
            return {...state}
    }
};

const fetchGames = (userData) => {
    return {
        type: 'FETCH_GAMES',
        payload: userData,
    };
};

export default gamesReducer;