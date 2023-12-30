import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover w-screen" src={BG_URL} alt="logo" />
      </div>
      
        
        <div className="py-80 pt-[30%] md:p-0 ">
          <GptSearchBar />
          <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;