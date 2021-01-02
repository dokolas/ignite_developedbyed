//combining multiple reducers into one
import { combineReducers }  from 'redux';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
})

export default rootReducer;