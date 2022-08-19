import * as api from "../api";

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchMovie(id);

    dispatch({ type: "FETCH_MOVIE", payload: data });
  } catch (error) {
    console.log(error);
  }
}