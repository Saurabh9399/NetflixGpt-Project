import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    trailerVideo: null,
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
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
