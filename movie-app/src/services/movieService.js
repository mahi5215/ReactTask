import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getPopularMovies = async (page = 1) => {
  const response = await apiClient.get('/movie/popular', {
    params: { page },
  });
  return response.data;
};

export const getTopRatedMovies = async (page = 1) => {
  const response = await apiClient.get('/movie/top_rated', {
    params: { page },
  });
  return response.data;
};

export const getUpcomingMovies = async (page = 1) => {
  const response = await apiClient.get('/movie/upcoming', {
    params: { page },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await apiClient.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const searchMovies = async (query, page = 1) => {
  const response = await apiClient.get('/search/movie', {
    params: { query, page },
  });
  return response.data;
};