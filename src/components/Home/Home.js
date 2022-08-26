import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

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

  const closeHero = () => {
    setHeroExpanded(false);
  };

  const handleMovieSelection = (movie) => {
    if (movie === selectedMovie && heroExpanded) {
      closeHero();
    } else {
      dispatch(fetchMovie(movie.id));
      setSelectedMovie(movie);
      setHeroExpanded(true);
      scroll.scrollToTop({duration: 400, smooth: true});
    }
  }

  const selectMovie = (movie) => {
    handleMovieSelection(movie);
  };

  useEffect(() => {
    dispatch(fetchMovies());
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
