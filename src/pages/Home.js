import React, { useEffect } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

export const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();

    //as soon as app loads - it will load the loadGames
    useEffect(() => {
      dispatch(loadGames());
    },[]);

    return(
        <div>
            <h1>Home</h1> 
        </div>
    );
}