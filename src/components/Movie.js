import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, summary, poster, year, genres }) {
  return (
    <Link
      to={{
        pathname: `movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div class="movie">
        <div class="movie__movie-title">{title}</div>
        <div class="movie__movie-year">({year})</div>
        <ul class="movie__movie-genres">
          {genres.map((tomato, index) => (
            <li key={index} class="movie__movie-genres-name">
              {tomato}
            </li>
          ))}
        </ul>
        <div class="poster-container">
          <img
            src={poster}
            alt={title}
            title={title}
            class="movie__movie-poster"
          ></img>
          <p class="movie__movie-summary">{summary.slice(0, 300)}...More</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie;
