import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addShowMovieDetailsFlag } from "../utils/movieSlice";

const ShowMovieDetails = () => {
  const dispatch = useDispatch();
  const [playVideoID, setPlayVideoID] = useState(null);
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const requiredMovieId = useSelector(
    (store) => store.movies.showMovieDetailsID
  );

  const movieDetail = nowPlayingMovies?.filter(
    (movie) => movie.id === requiredMovieId
  );

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieDetail[0]?.id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    setPlayVideoID(trailer?.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, [movieDetail]);
  if (!movieDetail) return null;
  return (
    <div className="h-[72%] w-1/2 bg-gray-800 fixed top-[15%] left-[25%] z-30 text-white backdrop border-2 border-gray-600">
      <button
        className="absolute right-0 bottom-0 m-2 bg-red-600 p-1 px-2 rounded-lg hover:opacity-80"
        onClick={() => dispatch(addShowMovieDetailsFlag())}
      >
        Close
      </button>
      <iframe
        className="w-[100%] h-[73%]"
        src={
          "https://www.youtube.com/embed/" + playVideoID
          //   "?&autoplay=1&mute=1&amp;controls=0"
        }
        title="YouTube video player"
        allow="fullscreen;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="bg-gray-800">
        <div className="flex items-center text-white font-bold text-xl p-1 m-1 mb-0 pb-0">
          {movieDetail[0]?.original_title}{" "}
          <span className="text-sm text-gray-400 ml-1 mt-1/2">
            (Release: {movieDetail[0]?.release_date})
          </span>
          <span className="text-sm text-gray-400 ml-1 mt-1/2">
            (Rating: {movieDetail[0]?.vote_average})
          </span>
        </div>
        <p className="text-gray-200 m-2 ml-3">{movieDetail[0]?.overview}</p>
      </div>
    </div>
  );
};

export default ShowMovieDetails;
