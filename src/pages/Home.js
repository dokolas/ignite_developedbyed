import React, { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//components
import Game from '../components/Games';
import GameDetail from '../components/GameDetail';
//styles and motion
import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();

    //as soon as app loads - it will load the loadGames
    useEffect(() => {
      dispatch(loadGames());
    },[dispatch]); // ONLY RUNS WHEN DISPATCH HAPPENS

    //GET THE DATA BACK FROM THE ABOVE FETCH/STATE
    const { popular, upcoming, newGames } = useSelector((state) => state.games);

    return(
        <GameList>
            <GameDetail />
            <h2>Upcoming Games</h2> 
                <Games>
                    {upcoming.map(game => (
                        <Game //DONT FORGET TO PASS PROPS HERE TO USE IN GAMES OR WITHIN APP
                            name={game.name} 
                            releaseDate={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>Popular Games</h2> 
                <Games>
                    {popular.map(game => (
                        <Game //DONT FORGET TO PASS PROPS HERE TO USE IN GAMES OR WITHIN APP
                            name={game.name} 
                            releaseDate={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>New Games</h2> 
                <Games>
                    {newGames.map(game => (
                        <Game //DONT FORGET TO PASS PROPS HERE TO USE IN GAMES OR WITHIN APP
                            name={game.name} 
                            releaseDate={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}
                </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }

`;
const Games = styled(motion.div)`
    min-height:80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;