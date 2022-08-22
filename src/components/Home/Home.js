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

  const [heroExpanded, setHeroExpanded] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  // const clearMovieSelection = () => {
  //   setSelectedMovie({});
  // };

  const handleMovieSelection = (movie) => {
    if (movie === selectedMovie && heroExpanded) {
      setHeroExpanded(false);
      // setTimeout(() => {
      //   clearMovieSelection();
      // }, 0.5 * 1000);
    } else {
      dispatch(fetchMovie(movie.id));
      setSelectedMovie(movie);
      setHeroExpanded(true);
    }
  }

  const selectMovie = (movie) => {
    handleMovieSelection(movie);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchMovies());
    // setHeroExpanded(false);
  }, [dispatch]);

  return (
    <div className="home-container">
      <Hero selectedMovie={selectedMovie} heroExpanded={heroExpanded}/>
      <div className="home-content-wrapper">
        <div className="home-content max-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
