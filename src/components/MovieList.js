import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-6 text-white">
      <h1 className="text-2xl py-2">{title}</h1>
      <div className="flex overflow-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
