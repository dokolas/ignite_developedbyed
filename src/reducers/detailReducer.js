//ALWAYS MAKE INIT STATE

const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
}; //need empty arrays to not cause .map errors

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game, //COMES FROM ACTION
        screen: action.payload.screen,
        isLoading: false, //turns off loading screen when data loads
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true, //sets the loading screen
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
