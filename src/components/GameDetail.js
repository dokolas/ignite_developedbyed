import React from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';

const GameDetail = () => {
    const { screen, game, isLoading } = useSelector(state => state.detail); //the beginning looks at the detail action/reducer because of the state.detail
    return (
        <>
        {!isLoading && ( //WHEN ISLOADING IS NOT TRUE - IT LOADS THE CARD DETAIL BELOW
            <CardShadow>
                <Detail>
                    <Stats>
                        <div className = 'rating'>
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                        </div>
                        <Info>
                            <h3>Platforms: </h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <h4 key={data.platform.id}>{data.platform.name}</h4>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                
                    <Media>
                        <img src={game.background_image} alt="image" />
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className='gallery'>
                        {/* {screen.results.map(screen => (
                            <img src={screen.image} key={screen.id} alt='image' />
                        ))} */}
                    </div>
                </Detail>  
            </CardShadow>
        )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    };
    &::-webkit-scrollbar-thumb{
        background-color: pink;
    };
    &::-webkit-scrollbar-track{
        background-color: white;
    };
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align:center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

const Ratings = styled(motion.div)`

`;

export default GameDetail;