import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) =>
      void (state.nowPlayingMovies = action.payload),
    addTrailerVideo: (state, action) => {
      void (state.trailerVideo = action.payload);
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
