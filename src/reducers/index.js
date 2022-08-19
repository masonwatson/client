import { combineReducers } from "redux";

import posts from "./posts";
import movies from "./movies";
import movie from "./movie";

export default combineReducers({
  posts: posts, 
  movies: movies, 
  movie: movie,
})
