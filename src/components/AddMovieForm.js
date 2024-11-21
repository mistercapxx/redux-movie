import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from '../styles/stylishlook.css';

const AddMovieForm = () => {
  const dispatch = useDispatch();
  
  const addMovie = useCallback( ////
    (title, producer,genre,rating) => {
      ///Callback remembers reference to that exact function
      /// to avoid creating new function on
      ///every  new render 
      dispatch({
        type: "ADD_MOVIE",
        payload: {title, producer,genre,rating, watched: false}, ///new movie object
      });
    },[dispatch] ///function will not be rerendered. it will be same because deps not activate
    ///dispatch is stable, never changing
  );

  return (
    <div className="spacer_on">
      <input type="text" placeholder="Name of movie" id="movieTitle" />
      <input type="text" placeholder="Producer" id="movieProducer" />
      <input type="text" placeholder="Genre" id="movieGenre" />
      <input type="text" placeholder="Rating" id="movieRating" />
      <button
        onClick={() =>
          addMovie(
            document.getElementById("movieTitle").value,
            document.getElementById("movieProducer").value,
            document.getElementById("movieGenre").value,
            document.getElementById("movieRating").value
          )
        }
      >
        Add Movie
      </button>
    </div>
  );
};
export default AddMovieForm;

////alternative way :

/// const [title, setTitle] = useState("");
/// const [producer, setProducer] = useState("");
/// const addMovie = useCallback(() => {
///dispatch({
//type: 'ADD_MOVIE',
//     payload: { id: Date.now(), title, producer, watched: false }
// });
///    setTitle("");
///setProducer("");
///}, [dispatch, title, producer]);/
////return (
// <div>
// <input
//     type="text"
//     placeholder="Name of movie"
//     value={title}
//     onChange={(e) => setTitle(e.target.value)}
// />
/// <input
// type="text"
// placeholder="Producer"
// value={producer}
// onChange={(e) => setProducer(e.target.value)}
// />
/// <button onClick={addMovie}>Add Movie</button>
// </div>
//     );
// };
