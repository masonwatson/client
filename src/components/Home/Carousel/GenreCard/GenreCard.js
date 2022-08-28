import React from "react";

import "./GenreCard.css";

const GenreCard = ({ genre, setSelectedGenre, selectedGenre }) => {
  return (
    <div className={`genre-card ${selectedGenre.name === genre.name ? "active" : "inactive"}`} onClick={() => setSelectedGenre(genre)}>
      <div className="genre-name">
        <span>{genre.name}</span>
      </div>
    </div>
  );
};

export default GenreCard;
