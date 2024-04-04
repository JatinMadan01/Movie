import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovieDetail = createAsyncThunk(
  'movieDetail/fetchMovieDetail',
  async (id) => {
    const response = await axios.get(`https://api.example.com/movie/${id}`);
    return response.data;
  }
);

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState: {
    movie: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieDetailSlice.reducer;