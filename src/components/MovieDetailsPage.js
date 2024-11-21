import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const navigate= useNavigate();

  const { movieId } = useParams(); ///use params to use id of this movie that we navigated to from HomePage
  const movies = useSelector((state) => state.moviekey.movies); //get movies again

  const movie = movies.find((kino) => kino.id === parseInt(movieId, 10)); ///find that exact movie from array (compared with params id to find)
///means compare e.x. 2 === 2
  return (
    <div>
        <img src={movie.image}/>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Producer: {movie.producer}</p>
      <p>Rating: {movie.rating}</p>
      {/* <p>Description:{movie.description}</p> */}
      <br />
      <br />
      <br />
      <button onClick={()=>navigate('/movies')}>See All Movies</button>
    </div>
  );
};

export default MovieDetailsPage;
