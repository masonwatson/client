import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGenres } from "../../../actions/genres";

import GenreCard from "./GenreCard/GenreCard";

import "./GenreCard/GenreCard.css";
import "./Carousel.css";

function Carousel({ setSelectedGenre, selectedGenre }) {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className={`genre-card ${selectedGenre.name === "All" ? "active" : "inactive"}`} onClick={() => setSelectedGenre({ id: 0, name: "All" })}>
          <div className="genre-name">
            <span>All</span>
          </div>
        </div>
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            genre={genre}
            setSelectedGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
