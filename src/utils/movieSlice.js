import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    trailerVideo: null,
    upcomingSeries: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) =>
      void (state.nowPlayingMovies = action.payload),
    addTrailerVideo: (state, action) => {
      void (state.trailerVideo = action.payload);
    },
    addPopularMovies: (state, action) => {
      void (state.popularMovies = action.payload);
    },
    addTrendingMovies: (state, action) => {
      void (state.trendingMovies = action.payload);
    },
    addUpcomingSeries: (state, action) => {
      void (state.upcomingSeries = action.payload);
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingSeries,
} = moviesSlice.actions;

export default moviesSlice.reducer;
