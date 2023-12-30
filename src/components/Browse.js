import { useSelector } from "react-redux";
import Header from "../components/Header";
import usePopularMovies from "../hooks/usePopularMovies";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearch from "./GptSearch";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchBar from "./GptSearchBar";
import MainContainer from "./MainContainer";
import { BG_URL } from "../utils/constants";

import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return(
    < >
 <Header/>
    {!showGptSearch?(<><MainContainer/>
    <SecondaryContainer/></>):(
    <>
    <GptSearch/>
    </>)
    }

    
    </>
  )
};
export default Browse;
