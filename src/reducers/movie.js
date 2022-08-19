/* eslint  import/no-anonymous-default-export: off */

export default function movie(movie = {}, action) {
  switch (action.type) {
    case "FETCH_MOVIE": {
      return action.payload;
    }
    default:
      return movie;
  }
}