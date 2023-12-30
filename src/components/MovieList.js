import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" overflow-y-scroll">
      <h1 className="sm:text-3xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;