import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 m-2 hover:scale-150">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
