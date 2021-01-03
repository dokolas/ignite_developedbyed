import axios from 'axios';
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl } from '../api';

//action creator - to load async - do double () => () => 
export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    });
}