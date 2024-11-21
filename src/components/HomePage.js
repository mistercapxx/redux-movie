import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Select, MenuItem, Typography } from "@mui/material";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const movies = useSelector((state) => state.moviekey.movies);
  const navigate = useNavigate();

  const handleGenerate = () => {

    const filteredGenre = movies.filter((movie) => movie.genre === selectedGenre); 
    ///find all movies with selected genre and return NEW filtered array

    // if (filteredGenre.length === 0) {
    //     alert("No movies found for the selected genre.");
    //     return; ///if there no such genre movies found
    //   }
    const thatMovie = filteredGenre[Math.floor(Math.random() * filteredGenre.length)]; //index creation here/// decide which movie from selected genre to display
    navigate(`/movie/${thatMovie.id}`);//navigate to display its info///use id parameter of that one movie from array
  };

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

    <div>
      <select onChange={(e) => setSelectedGenre(e.target.value)} value={selectedGenre} >
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <br />
      <br />
      <button onClick={handleGenerate}>GENERATE</button>
    </div>
  );
};

export default HomePage;
