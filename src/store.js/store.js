import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import movieDetailReducer from './slices/movieDetailSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetail: movieDetailReducer,
  },
});

export default store;