
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCast } from '../services/movieService';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await getMovieDetails(id);
      const movieCast = await getMovieCast(id);
      setMovie(movieDetails);
      setCast(movieCast.cast);
    };

    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-header">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          {/* Add more details as needed */}
        </div>
      </div>
      
      <h2>Cast</h2>
      <div className="cast-list">
        {cast.map(member => (
          <div key={member.cast_id} className="cast-member">
            <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;

