/* eslint  import/no-anonymous-default-export: off */

export default function movies(movies = [], action) {
  switch (action.type) {
    case "FETCH_MOVIES": {
      return action.payload;
    }
    default:
      return movies;
  }
}
