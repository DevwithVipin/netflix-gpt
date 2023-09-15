import { useSelector } from "react-redux";
import Header from "../components/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";
import GptSearchBar from "./GptSearchBar";
import MainContainer from "./MainContainer";




import SecondaryContainer from "./SecondaryContainer";

const Browse = () => { 
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies();
  return (
    <div>
      {!showGptSearch?<>
      <Header/>
      <GptSearch/>
      <MainContainer />
      <SecondaryContainer /></>:(<div className=" ">
      <Header/>
      <GptSearchBar/>
      </div>)}
    </div>
  );
};
export default Browse;