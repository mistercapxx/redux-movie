// import React from "react";
// import AddMovieForm from "./AddMovieForm";
// import MovieList from "./MovieList";
// import store from "../store/store";
// import { Provider } from "react-redux";
// import { FilterProvider } from "../context/FilterContext";
// import FilterControls from "./FilterControls";

// function App() {
//   return (
//     <Provider store={store}>
//       {/* ///access to store for all components inside that use Selector and Dispatch */}
//       <FilterProvider>  
//         {/* /// - access to context of filter */}
//         {/* ///all components know about the only one state - filter */}
//         <div>
      
//         <br/>
//         <h1>New Movie ? </h1>
//         <AddMovieForm />
//         <br/>
//         <h1>Movie Hub</h1>
//         <FilterControls/>
//         <br/>
//         <MovieList />
//       </div>
//       </FilterProvider>
//     </Provider>
//   );
// }

// export default App;

import React from 'react';
// import AddMovieForm from './AddMovieForm';
// import MovieListPage from './MovieListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider} from 'react-redux';
import store from "../store/store";
import { FilterProvider } from '../context/FilterContext';
import HomePage from './HomePage';
// import MovieItem from './MovieItem';
import MovieDetailsPage from './MovieDetailsPage';
import MovieListPage from './MovieListPage';

function App() {

  return (
    <Provider store={store}>
<FilterProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/add-movie" element={<AddMovieForm/>}/> */}
        {/* <Route path="/movies" element={<MovieListPage/>}/> */}
        <Route path='/movies' element={<MovieListPage/>}/>
      <Route path='/movie/:movieId' element={<MovieDetailsPage/>}/>
      </Routes>
    </Router>
    </FilterProvider>
    </Provider>
  )
}

export default App;
