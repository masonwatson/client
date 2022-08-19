import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMovies } from "../../actions/movies";
import { fetchMovie } from "../../actions/movie";

import Hero from "./Hero/Hero";
import MovieCard from "../MovieCard/MovieCard";

import "./Home.css";

const Home = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [selectedMovie, setSelectedMovie] = useState({});
  
  const selectMovie = (selectedMovie) => {
    dispatch(fetchMovie(selectedMovie.id));
    setSelectedMovie(selectedMovie);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="home-container">
      <Hero selectedMovie={selectedMovie} />
      <div className="home-content max-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            selectMovie={selectMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
