import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const SearchResult = () => {
  const query = new URLSearchParams(useLocation().search).get('query');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const data = await searchMovies(query, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchSearchResults();
  }, [query, currentPage]);

  return (
    <div className="search-result">
      <h1>Search Results for "{query}"</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default SearchResult;
