import React from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
//react router
import { Link } from 'react-router-dom';

const Game = ({name, releaseDate, image, id }) => { //ON THIS LINE BE SURE TO PASS PROPS LIKE NAME/RELEASEDATE/ETC
    //load details
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    }

    return (
        // <div>
        //     <h3>Game Name</h3>
        //     <p>Released Date</p>
        // </div>
        <StyledGame onClick={loadDetailHandler}> 
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{releaseDate}</p>
                <img src={image} alt={name} />
            </Link>
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