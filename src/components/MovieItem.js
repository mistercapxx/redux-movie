import { useRef } from "react";
import { useDispatch } from "react-redux";
import '../styles/MovieItem.scss';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const titleInputRef = useRef(null); //creating reference for input field to change its value and focus
  const producerInputRef = useRef(null);

  ///inputRef - reference on input
//   const handleEdit = (inputRef) => {
//     inputRef.current.focus(); ///focus on exact field by using ref
//   };

  const handleUpdate = () => {
    dispatch({
      ///send action to redux
      type: "UPDATE_MOVIE",
      payload: { 
        id: movie.id, ///this movie's id  
        title: titleInputRef.current.value, ///save current typed values
        ///title and producer
        ///that we type in input fields
        producer: producerInputRef.current.value,
      },
    });
  };
  const toggleWatched = () => {
    dispatch({
      type: "TOGGLE_MOVIE_WATCHED",
      payload: movie.id,
    });
  };
  const handleDelete = () => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: movie.id, ///we pass id of this exact rendered movie element from array
      ///on which we clicked the button
    });
  };

  //ref={titleInputRef} - we link created reference (titleInputRef) to exact field
  ///so it knows that ref to this field is  titleInputRef

  ////every object from movies array will get whats below
  return (
    <div className="movie-item ">
      <img src={movie.image} />
      <br />
      <br />
      <input ref={titleInputRef} defaultValue={movie.title} />
      {/* <button onClick={() => handleEdit(titleInputRef)}>FOCUS ON</button> */}
      <br />
      <input ref={producerInputRef} defaultValue={movie.producer} />
    
      {/* <button onClick={() => handleEdit(producerInputRef)}>
        FOCUS ON 
      </button> */}
      <br />
      <br />
      <button onClick={handleUpdate}>Update Movie</button>
      <br />
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? "Watched" : "Unwatched"}</p>
      <button onClick={toggleWatched}>{movie.watched ? "Mark as Unwatched" : "Mark as Watched"}</button>
      <br />
      <br />
      <button onClick={handleDelete}>Delete</button>
   

      <br />
      <br />
    </div>
  );
};
export default MovieItem;
