import React, { useState } from "react";
import MovieList from "./MovieList";
import FilterControls from "./FilterControls";
// import AddMovieForm from './AddMovieForm';
import ModalAddMovie from "./ModalAddMovie";
import { Button } from "@mui/material";


const MovieListPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies</h1>
      <FilterControls />
      <br />
      <br />
      <MovieList />
      <br />
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "12px",
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
         
          }}
        >
         <span style={{ wordBreak: "break-word" }}>Add</span>
  <span>Movie</span>
        </Button>
      </div>
      {openModal && <ModalAddMovie handleClose={handleCloseModal} />}
    </div>
  );
};

export default MovieListPage;
