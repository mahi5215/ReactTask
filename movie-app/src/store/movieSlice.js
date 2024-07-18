import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getMovieDetails, searchMovies } from '../services/movieService';

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async (page) => {
  const response = await getPopularMovies(page);
  return response.results;
});

export const fetchTopRatedMovies = createAsyncThunk('movies/fetchTopRatedMovies', async (page) => {
  const response = await getTopRatedMovies(page);
  return response.results;
});

export const fetchUpcomingMovies = createAsyncThunk('movies/fetchUpcomingMovies', async (page) => {
  const response = await getUpcomingMovies(page);
  return response.results;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
  const response = await getMovieDetails(movieId);
  return response;
});

export const fetchSearchResults = createAsyncThunk('movies/fetchSearchResults', async ({ query, page }) => {
  const response = await searchMovies(query, page);
  return response.results;
});

// Movie slice
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    movieDetails: null,
    searchResults: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;