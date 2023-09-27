import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingSeries from "../hooks/useUpcomingSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingSeries();
  const hideScrollbarStyles = {
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
    "&::-webkit-scrollbar": {
      display: "none", // Webkit browsers (Chrome, Safari, etc.)
    },
  };
  return (
    <div style={hideScrollbarStyles}>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
