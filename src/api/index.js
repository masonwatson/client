import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_API_URL = "https://api.themoviedb.org/3";

export const fetchPosts = () => axios.get(API_URL);

export const createPost = (newPost) => axios.post(API_URL, newPost);

export const fetchMovies = (type, query, genres) => axios.get(`${TMDB_API_URL}/${type}/movie`, {
  params: {
    api_key: TMDB_API_KEY,
    include_adult: false,
    query: query, 
    with_genres: genres,
    watch_region: "USA",
  },
});

export const fetchMovie = (id) => axios.get(`${TMDB_API_URL}/movie/${id}`, {
  params: {
    api_key: TMDB_API_KEY,
    append_to_response: "videos"
  },
});

export const fetchGenres = () => axios.get(`${TMDB_API_URL}/genre/movie/list`, {
  params: {
    api_key: TMDB_API_KEY,
    language: "en-US"
  },
});