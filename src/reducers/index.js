//combining multiple reducers into one
import { combineReducers }  from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
})

export default rootReducer;