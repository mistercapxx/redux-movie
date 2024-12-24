import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useFilter } from "../context/FilterContext";
import MovieItem from "./MovieItem";
import '../styles/MovieList.scss';

const MovieList = () => {
  const movies = useSelector(state => state.moviekey.movies); ///get movies again

  const { filter } = useFilter();///use shortcut and grab filter

  useEffect(()=> {
      console.log('Component mounted');
      return() => {
          console.log('Component unmounted');
      };
  },[]);

  useEffect(() => {
    console.log("Movies updated", movies);
  }, [movies]);///every time movies are getting something new or deleting

  const filteredMovies = useMemo(() => { ///return new filtered array "filteredMovies"

    ///memo make function work only if filter or movies changed because of dependencies
    ///or just return cached result (example :for next render, if dependencies REMAINED UNCHAGNED (since 
    ///we filtered array and got result in filteredMovies last time),
    ///function not rerender and memo will just use previous result for filteredMovies and show it again)


    // if (!Array.isArray(movies)) return [];


    switch (filter) {///
      ///if we click on some FilterControls buttons, we getting filter and rerender array
      case "WATCHED":
        return movies.filter(movie => movie.watched);///filter to new arr where watched = true
      case "UNWATCHED":
        return movies.filter(movie => !movie.watched);
      default:
        return movies;///filter - 'ALL'
    }
  }, [movies, filter]);/// memo only renders if movies changed or we filtering

  ///sum up : memo filters only if deps are changing, if not - just use previous result from last filter


  ///conditional render for exceptions
  if(filter === 'WATCHED' && filteredMovies.length === 0) { ///if no such objects with condition in array
    return <div>No watched movies yet</div>
  }
  if(filter ===  'UNWATCHED' && filteredMovies.length === 0) {
    return <div>No unwatched movies</div>;
  }
 
///now render every movie as MovieItem
  return (
    <div className="movie-list-container">
      {filteredMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />///pass every movie info to props movie (id,title,producer,watched)
      ))}
    </div>
  );
};

export default MovieList;
