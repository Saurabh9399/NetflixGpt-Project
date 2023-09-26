import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  console.log(popularMovies);
  return (
    <div className="bg-black">
      <div className="relative pl-12 -mt-[14rem] z-20">
        <MovieList title={"Now Playing Movies"} movies={movies} />
        <MovieList title={"Trending"} movies={popularMovies} />
        <MovieList title={"Popular Movies"} movies={trendingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
