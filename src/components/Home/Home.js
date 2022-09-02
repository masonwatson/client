import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import { fetchMovies } from "../../actions/movies";
import { fetchMovie } from "../../actions/movie";


import Carousel from "./Carousel/Carousel";
import Hero from "./Hero/Hero";

import MovieCard from "../MovieCard/MovieCard";

import "./Home.css";

const Home = ({ vertNavExpanded, vertNavActive, search}) => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [homeInitialized, setHomeInitialized] = useState(false);
  const [heroExpanded, setHeroExpanded] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState({});
  const [selectedMovie, setSelectedMovie] = useState({});

  const closeHero = () => {
    setHeroExpanded(false);
  };

  const handleMovieSelection = async(movie) => {
    if (movie.original_title === selectedMovie.original_title && heroExpanded) {
      closeHero();
    } else {
      const results = await dispatch(fetchMovie(movie.id));
      setSelectedMovie(results);
      setHeroExpanded(true);
      scroll.scrollToTop({ duration: 400, smooth: true });
    }
  };

  const selectMovie = (movie) => {
    handleMovieSelection(movie);
  };

  useEffect(() => {
    const renderHome = async () => {
      const results = await dispatch(fetchMovies());
      const movie = await dispatch(fetchMovie(results[0].id));
      setSelectedMovie(movie);

      setSelectedGenre({id: 0, name: "All"});
      setHeroExpanded(true);
      setHomeInitialized(true);
    };

    if (!homeInitialized) renderHome();

  }, [dispatch, homeInitialized]);

  useEffect(() => {
    const renderGenreCondition = async() => {
      const results = await dispatch(fetchMovies(selectedGenre.id));
      const movie = await dispatch(fetchMovie(results[0].id));
      setSelectedMovie(movie);
      setHeroExpanded(true);
    }

    console.log("genre rerender");
    renderGenreCondition();
  }, [dispatch, selectedGenre]);

  useEffect(() => {
    setHeroExpanded(false);
  }, [dispatch, search]);

  useEffect(() => {
    const renderGenreCondition = async() => {
      const results = await dispatch(fetchMovies(selectedGenre.id));
      const movie = await dispatch(fetchMovie(results[0].id));
      setSelectedMovie(movie);
      setHeroExpanded(true);
    }

    renderGenreCondition();
  }, [dispatch, selectedGenre]);

  return (
    <div className={`home-container ${vertNavActive ? (vertNavExpanded ? "expanded" : "minimized") : "collapsed"}`}>
      <Carousel setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
      <Hero selectedMovie={selectedMovie} heroExpanded={heroExpanded} closeHero={closeHero}/>
      <div className="home-content-wrapper">
        <div className="home-content max-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              selectMovie={selectMovie}
              selectedMovie={selectedMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
