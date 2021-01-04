import axios from 'axios';
import { gameDetailsUrl, gameScreenshotUrl} from '../api';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsUrl(id));
    const screenshotData = await axios.get(gameScreenshotUrl(id));

// MADE THIS THEN ADD TO REDUCER
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenshotData.data
        }
    })};