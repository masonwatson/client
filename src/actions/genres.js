import * as api from "../api";

export const fetchGenres = () => {
  return async dispatch => {
    function onSuccess(genres) {
      dispatch({ type: "FETCH_GENRES", payload: genres });
      return genres;
    }
  
    try {
      const { data : { genres } } = await api.fetchGenres();
      return onSuccess(genres);
    } catch (error) {
      console.log(error);
    }
  }
}