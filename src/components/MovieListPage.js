import React, { useState } from 'react';
import MovieList from './MovieList';
import FilterControls from './FilterControls';
// import AddMovieForm from './AddMovieForm';
import ModalAddMovie from './ModalAddMovie';

const MovieListPage = () =>
{
    const [openModal,setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


 return (

    <div>
        <h1>Movies</h1>
        <h4>Filter</h4>
        <FilterControls/>
        <br/>
        <br/>
        <MovieList/>
        <br/>
        <h1>New Movie ?</h1>
     <button onClick={handleOpenModal}>Add!</button>
     {openModal && <ModalAddMovie handleClose={handleCloseModal}/>}
        {/* <AddMovieForm/> */}
    </div>
);
 }

export default MovieListPage;