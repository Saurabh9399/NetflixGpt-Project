import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingSeries = () => {
  const dispatch = useDispatch();
  const getUpcomingSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("upcoming", json.results);
    dispatch(addUpcomingSeries(json.results));
  };

  useEffect(() => {
    getUpcomingSeries();
  }, []);
};

export default useUpcomingSeries;
