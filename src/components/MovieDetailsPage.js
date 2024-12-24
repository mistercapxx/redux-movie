import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/MovieDetailsPage.scss';
import { Button } from '@mui/material';

const MovieDetailsPage = () => {

    const navigate= useNavigate();
  const { movieId } = useParams(); ///from Route of App. take id from HomePage navigate id of selected movie, 
  const movies = useSelector((state) => state.moviekey.movies); //get movies again

  const movie = movies.find((kino) => kino.id === parseInt(movieId, 10)); ///find that OBJECT from array (compared with params id to find) - to show on screen its info
///means compare e.x. 2 === 2

const generateDifferentMovie = () => {
  
  const filteredGenre = movies.filter((mov) => mov.genre === movie.genre); ///keep already known genre and filter movies again
  const availableMovies = filteredGenre.filter((cin)=> cin.genre !== movie.id); ///not to repeat same id
  const randomMovie = availableMovies[Math.floor(Math.random() * availableMovies.length)]; ///get one movie
  navigate(`/movie/${randomMovie.id}`);
}

  return (
    <div className="movie-details">
        <img src={movie.image} className="movie-details__image"/>
      <h1 className="movie-details__title">{movie.title}</h1>
      <div className="movie-details__info">
      <p>Genre: {movie.genre}</p>
      <p>Producer: {movie.producer}</p>
      <p>Rating: {movie.rating}</p>
      <h3>Description : </h3>
      <p>{movie.description}</p>
      </div>

      <br />
      <br />
      <br />
      <button className="movie-details__button" onClick={generateDifferentMovie}>Generate Again</button>

      <div  style={{ position: "fixed", bottom: "20px", right: "20px" }}>
      <Button
  className="movie-details__redirection"
  variant="contained"
  onClick={() => navigate('/movies')}
>
         <span style={{ wordBreak: "break-word" }}>See</span>
  <span>All Movies</span>
        </Button>
      </div>

    </div>
  );
};

export default MovieDetailsPage;
