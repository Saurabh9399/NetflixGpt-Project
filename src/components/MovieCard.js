import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addMovieDetailsID,
  addShowMovieDetailsFlag,
} from "../utils/movieSlice";

const MovieCard = ({ posterPath, movie }) => {
  const dispatch = useDispatch();
  if (!posterPath) return;
  console.log("movie", movie);
  const handleMovieDetails = () => {
    dispatch(addShowMovieDetailsFlag());
    dispatch(addMovieDetailsID(movie.id));
  };

  return (
    <div className="w-36 m-2 hover:scale-150" onClick={handleMovieDetails}>
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
