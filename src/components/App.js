import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider} from 'react-redux';
import store from "../store/store";
import { FilterProvider } from '../context/FilterContext';
import HomePage from './HomePage';
import MovieDetailsPage from './MovieDetailsPage';
import MovieListPage from './MovieListPage';

function App() {

  return (
    <Provider store={store}>
<FilterProvider> 
    <Router basename='/redux-movie'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
   
        <Route path='/movies' element={<MovieListPage/>}/>
  
      <Route path='/movie/:movieId' element={<MovieDetailsPage/>}/> 
      </Routes>
    </Router>
    </FilterProvider>
    </Provider>
  )
}

export default App;
