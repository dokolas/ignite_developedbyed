import React from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ({name, releaseDate, image, }) => { //ON THIS LINE BE SURE TO PASS PROPS LIKE NAME/RELEASEDATE/ETC
    return (
        // <div>
        //     <h3>Game Name</h3>
        //     <p>Released Date</p>
        // </div>
        <StyledGame>
            <h3>{name}</h3>
            <p>{releaseDate}</p>
            <img src={image} alt={name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2); 
    img{
        width:100%;
        height: 40vh;
        object-fit: cover;
    }
    text-align: center;
    border-radius: 1rem;
`;

export default Game;