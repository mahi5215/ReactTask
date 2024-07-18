import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies(currentPage);
      setMovies(data.results);
      console.log(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [currentPage]);

  return (
    <div className="home-container">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;
