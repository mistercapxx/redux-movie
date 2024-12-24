import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.scss";
import batman from '/Users/mistercap/StudioProjects/movie-collection/src/img/superhero-black-and-white-illustration-free-vector.jpg';


const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const movies = useSelector((state) => state.moviekey.movies);
  const navigate = useNavigate();

  const handleGenerate = () => {

    const filteredGenre = movies.filter((movie) => movie.genre === selectedGenre);  ///find ALL movies with THAT selected genre and return NEW filtered array
   

    const thatMovie = filteredGenre[Math.floor(Math.random() * filteredGenre.length)]; //index creation. decide which movie from selected genre to display/// filterGenre[1] ex.
    navigate(`/movie/${thatMovie.id}`);//navigate to display its info///use id parameter of THAT one movie from array
    }


  return (
    // <div>
    //   <Link to="/add-movie">
    //     <button>Add New Movie !</button>
    //   </Link>
    //   <br/>
    //   <br/>
    //   <Link to="/movies">
    //     <button>Movies</button>
    //   </Link>
    // </div>

    <div className="homepage">
      <div className="homepage__left">
       <button className="homepage__button" onClick={handleGenerate}>
        GENERATE
       </button>
   
      <br />
      <select className='homepage__select' onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre} >
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
    <div className="homepage__right">
      <img src={batman} className="homepage__image"/>
</div>
    </div>
  );
};

export default HomePage;
