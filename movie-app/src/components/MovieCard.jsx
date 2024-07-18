import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <div className="movie-image">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
