import { combineReducers } from "redux";

import posts from "./posts";
import movies from "./movies";
import movie from "./movie";
import genres from "./genres";

export default combineReducers({
  posts: posts, 
  movies: movies, 
  movie: movie,
  genres: genres,
})
