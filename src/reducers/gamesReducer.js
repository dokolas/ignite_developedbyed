
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
}

export default gamesReducer;