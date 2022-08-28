import * as api from "../api";

// export const fetchMovie = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchMovie(id);

//     dispatch({ type: "FETCH_MOVIE", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// }

export const fetchMovie = (id) => {
  return async (dispatch) => {
    function onSuccess(data) {
      dispatch({ type: "FETCH_MOVIE", payload: data });
      return data;
    }
    try {
      const { data } = await api.fetchMovie(id);
      return onSuccess(data);
    } catch (error) {
      console.log(error);
    }
  };
};
