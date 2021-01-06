import React from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
//react router
import { Link } from 'react-router-dom';
//import image resize component
import { smallImage } from '../util';

const Game = ({name, releaseDate, image, id }) => { //ON THIS LINE BE SURE TO PASS PROPS LIKE NAME/RELEASEDATE/ETC
    const stringPathId = id.toString();
    //load details
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';  //hides second scrollbar
        dispatch(loadDetail(id));
        console.log(typeof id)
    }

    return (
        // <div> LEFT THIS HERE AS IT WAS THE PRECURSOR TO LIVE DATA
        //     <h3>Game Name</h3>
        //     <p>Released Date</p>
        // </div>
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}> 
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{releaseDate}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2); 
    img{
        width:100%;
        height: 60vh;
        object-fit: cover;
    }
    text-align: center;
    border-radius: 1rem;
    overflow: hidden; //rounds corners
`;

export default Game;