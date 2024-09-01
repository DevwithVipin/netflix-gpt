import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);


  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pl-10 ">
        <div className="  xl:-mt-52 sm:text-xs sm:-mt-2 md:text-xs lg:-mt-32  md:-mt-42 md:pl-4 md:relative ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies.PopularMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
