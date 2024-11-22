import React, { useState } from "react";
import MovieList from "./MovieList";
import FilterControls from "./FilterControls";
// import AddMovieForm from './AddMovieForm';
import ModalAddMovie from "./ModalAddMovie";

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
      <div style={{ textAlign: "center" }}>
        <h1>New Movie ?</h1>
        <button style={{padding:'10px',fontSize:'20px'}} onClick={handleOpenModal}>Add!</button>
        {openModal && <ModalAddMovie handleClose={handleCloseModal} />}
        {/* <AddMovieForm/> */}
      </div>
    </div>
  );
};

export default MovieListPage;
