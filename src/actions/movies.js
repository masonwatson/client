import * as api from "../api";

export const fetchMovies = (searchKey) => async (dispatch) => {
  const type = searchKey ? "search" : "discover";
  try {
    const { data: { results } } = await api.fetchMovies(type, searchKey);

    dispatch({ type: "FETCH_MOVIES", payload: results });
  } catch (error) {
    console.log(error);
  }
}
