import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./Hero.css";

const Hero = ({ selectedMovie, heroExpanded }) => {
  const movie = useSelector((state) => state.movie);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

  const [playMovie, setPlayMovie] = useState(false);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [trailerAvailable, setTrailerAvailable] = useState(false);

  const handleRenderVideo = () => {
    if (movie.videos && playTrailer) {
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
    } else if (playMovie) {
      return renderMovie();
    }
  };

  const renderMovie = () => {
    return (
      <YouTube
        className="youtube-container"
        videoId="dQw4w9WgXcQ"
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

  const handleCloseButton = () => {
    if (playMovie === true) {
      setPlayMovie(false);
    } else if (playTrailer === true) {
      setPlayTrailer(false);
    }
  };

  useEffect(() => {
    setPlayTrailer(false);
    setPlayMovie(false);
  }, [selectedMovie, heroExpanded]);

  return (
    <div className={`${heroExpanded ? "hero-expanded" : "hero-closed"}`}>
      <div
        className="hero-container"
        style={{
          backgroundImage: `${
            selectedMovie.id
              ? `url(${IMAGE_PATH}${selectedMovie.backdrop_path})`
              : ""
          }`,
        }}
      >
        <div
          className={`hero-content ${heroExpanded ? "visible" : "invisible"}`}
        >
          {(playTrailer && trailerAvailable) || playMovie ? (
            <button
              className="button close-button"
              onClick={() => handleCloseButton()}
            >
              <span>Close</span>
            </button>
          ) : null}
          {(movie.videos && playTrailer) || playMovie
            ? handleRenderVideo()
            : null}
          <div className="button-container">
            <div className="button">
              <button
                className="play-button"
                onClick={() => setPlayMovie(true)}
              >
                <FontAwesomeIcon icon={faCirclePlay} size="lg" />
                <span>Play Movie</span>
              </button>
            </div>
            <div className="button">
              <button
                className="play-button"
                onClick={() => setPlayTrailer(true)}
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
                <span>Play Trailer</span>
              </button>
            </div>
            <div className="button">
              <button
                className="comment-button"
                onClick={() => setPlayTrailer(true)}
              >
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
                <span>Socialize</span>
              </button>
            </div>
          </div>
          <h1 className="hero-title">{selectedMovie.title}</h1>
          {selectedMovie.overview ? (
            <p className="hero-overview">{selectedMovie.overview}</p>
          ) : null}
        </div>
        <div
          className={`hero-backdrop ${heroExpanded ? "visible" : "invisible"}`}
        />
      </div>
    </div>
  );
};

export default Hero;
