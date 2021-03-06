import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Games";
import GameDetail from "../components/GameDetail";
//styles and motion
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//react router
import { useLocation } from "react-router-dom";

export const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2]; //splits pathname by the /, then the [2] gets the 3rd item (the id)

  //FETCH GAMES
  const dispatch = useDispatch();

  //as soon as app loads - it will load the loadGames
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); // ONLY RUNS WHEN DISPATCH HAPPENS

  //GET THE DATA BACK FROM THE ABOVE FETCH/STATE
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {/* If PathID exists above (doesn't exist on homepage because of the [2] then show game detail) */}
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {/* Important to have a toggle on and off with animate presence */}
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game //DONT FORGET TO PASS PROPS HERE TO USE IN GAMES OR WITHIN APP
                  name={game.name}
                  releaseDate={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          "" //this line item renders the '' with ? on line 40.  so if the length is 0, render ''
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
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
          {popular.map((game) => (
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
          {newGames.map((game) => (
            <Game //DONT FORGET TO PASS PROPS HERE TO USE IN GAMES OR WITHIN APP
              name={game.name}
              releaseDate={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  cursor: pointer;
`;
