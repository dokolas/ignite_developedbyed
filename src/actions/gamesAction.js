import axios from "axios";
import {
  popularGamesUrl,
  newGamesUrl,
  upcomingGamesUrl,
  searchGameUrl,
} from "../api";

//action creator - to load async - do double () => () =>
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchData = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchData.data.results,
    },
  });
};
