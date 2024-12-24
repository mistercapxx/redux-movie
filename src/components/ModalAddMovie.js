import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Box, Button, TextField } from '@mui/material';
import '../styles/ModalAddMovie.scss';


const ModalAddMovie = ({handleClose}) => {
    const dispatch = useDispatch();
    
    const [title,setTitle] = useState('');
    const [producer,setProducer] =useState('');
    const [genre,setGenre] = useState('');
    const [rating,setRating]=useState('');

    const addMovie = useCallback(() => { ///callback remembers the only one worked function and keeps it same
        ///until deps are changed
            dispatch({
                type:'ADD_MOVIE',
                payload: {title,producer,genre,rating,watched:false},
            });
            handleClose();
        
    },[dispatch,title,producer,genre,rating]);///
    ///because these values are depending on ModalAddMovie component state, we need to write them here

    ////if values of these deps not changing,func not calls again.

    //needed to guarantee func will update with NEW state values to be updated (because callback saves 
    ///one func between renders and save it with starting values and state)

    ///
    return (
        <Modal className='modal' open onClose={handleClose}>
<Box sx={{
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    backgroundColor:'white',
    padding:5,
    width:400,
    boxShadow:24,///shadow around

}}
>
    <h2>New Movie</h2>
    <Box sx={{display:'flex',gap:2}}>
    <TextField
         label="Movie Title"
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
 />
  
    <TextField
     label="Producer"
    value={producer}
    onChange={(e)=>setProducer(e.target.value)}
/>
</Box>
      <br /><br />  
      <Box sx={{display:'flex',gap:2}}>
      <TextField
          label="Genre"
    value={genre}
    onChange={(e)=>setGenre(e.target.value)}
 
/>

        <TextField
          label="Rating"
    value={rating}
    onChange={(e)=>setRating(e.target.value)}
  />
  </Box>
     <br /><br />

     <Button variant="contained" onClick={addMovie} style={{marginLeft:80}}>Add Movie</Button>
     <Button variant="contained" onClick={handleClose} style={{marginLeft:10}}>
        Cancel
     </Button>
</Box>
        </Modal>
    )
}
export default ModalAddMovie;