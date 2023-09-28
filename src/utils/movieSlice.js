import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    trailerVideo: null,
    upcomingSeries: null,
    showMovieDetailsID: null,
    showMovieDetailsFlag: false,
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
    addMovieDetailsID: (state, action) => {
      state.showMovieDetailsID = action.payload;
    },
    addShowMovieDetailsFlag: (state) => {
      state.showMovieDetailsFlag = !state.showMovieDetailsFlag;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingSeries,
  addMovieDetailsID,
  addShowMovieDetailsFlag,
} = moviesSlice.actions;

export default moviesSlice.reducer;
