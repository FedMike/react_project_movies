import { Movie } from "./Movie";

function Movies(props) {
  const { Search = [] } = props.movies;
  return (
    <div className="movies">
      {Search.length ? (
        Search.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
