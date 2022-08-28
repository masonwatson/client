import * as api from "../api";

export const fetchMovies = (searchParameters) => {
  return async (dispatch) => {
    function onSuccess(results) {
      dispatch({ type: "FETCH_MOVIES", payload: results });
      return results;
    }
    try {
      const type =
        searchParameters &&
        (typeof searchParameters === "string" || searchParameters === 0)
          ? "search"
          : "discover";
          
      if (type === "search" && typeof searchParameters === "string") {
        console.log("Searched-for Movies");
          const {
            data: { results },
          } = await api.fetchMovies(type, searchParameters, null);
          return onSuccess(results);
      } else if (type === "discover" && searchParameters) {
        console.log("Genre Specific Movies");
          const {
            data: { results },
          } = await api.fetchMovies(type, null, searchParameters);
          return onSuccess(results);
      } else {
        console.log("All Movies");
        const {
          data: { results },
        } = await api.fetchMovies(type);
        return onSuccess(results);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
