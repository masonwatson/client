import React from "react";

import "./MovieCard.css";

const MovieCard = ({ movie, selectMovie, selectedMovie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie-card" onClick={() => selectMovie(movie)}>
      <div className="movie-cover">
        {movie.poster_path ? (
          <div className="movie-poster">
            <img
              className="movie-image"
              src={`${IMAGE_PATH}${movie.poster_path}`}
              alt=""
            />
            <div className="movie-more-info">
              <span>More Info</span>
            </div>
          </div>
        ) : (
          <div className="movie-placeholder">No Image Found</div>
        )}
        <div></div>
      </div>
      <div className="movie-title">
        <span className="movie-title">{movie.title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
