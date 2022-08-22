import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

import "./Hero.css";

const Hero = ({ selectedMovie, heroExpanded }) => {
  const movie = useSelector((state) => state.movie);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

  const [playTrailer, setPlayTrailer] = useState(false);
  const [trailerAvailable, setTrailerAvailable] = useState(false);

  const handleRenderTrailer = () => {
    const trailer = movie.videos.results.find(
      (vid) => vid.type === "Trailer" && vid.official === true
    );
    if (trailer) {
      if (!trailerAvailable) setTrailerAvailable(true);
      return renderTrailer(trailer);
    } else {
      if (trailerAvailable) setTrailerAvailable(false);
      return null;
    }
  };

  const renderTrailer = (trailer) => {
    return (
      <YouTube
        className="youtube-container"
        videoId={trailer.key}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
          },
        }}
      />
    );
  };

  useEffect(() => {
    setPlayTrailer(false);
  }, [selectedMovie, heroExpanded]);

  return (
    <div className={`${heroExpanded ? "hero-expanded" : "hero-closed"}`}>
      {/* {selectedMovie.id ? ( */}
        <div
          className="hero-container"
          style={{
            backgroundImage: `${selectedMovie.id ? `url(${IMAGE_PATH}${selectedMovie.backdrop_path})` : ''}`,
          }}
        >
          <div className={`hero-content ${heroExpanded ? "visible" : "invisible"}`}>
            {playTrailer && trailerAvailable ? (
              <button
                className="button close-button"
                onClick={() => setPlayTrailer(false)}
              >
                <span>Close</span>
              </button>
            ) : null}
            {movie.videos && playTrailer ? handleRenderTrailer() : null}
            <button
              className="button play-button"
              onClick={() => setPlayTrailer(!playTrailer)}
            >
              <span>Play Trailer</span>
            </button>
            <h1 className="hero-title">{selectedMovie.title}</h1>
            {selectedMovie.overview ? (
              <p className="hero-overview">{selectedMovie.overview}</p>
            ) : null}
          </div>
          <div className={`hero-backdrop ${heroExpanded ? "visible" : "invisible"}`} />
        </div>
      {/* ) : null} */}
    </div>
  );
};

export default Hero;
