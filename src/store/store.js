import { configureStore } from "@reduxjs/toolkit";
import furyroad from "../img/max.jpeg";
import shawshank from "../img/shaw.jpg";

// let movieId = 1; ///counter for id parameter of movie object ///old counter for id of new added movie

// const initialState = {
//     movies : []//field with array
// };

const initialState = {
    movies:[
        {
            id: 1,
            title: "Mad Max: Fury Road",
            producer: "George Miller",
            watched: false,
            genre: "Action",
            rating: 8.1,
            image: furyroad,
          },
          {
            id: 2,
            title: "The Shawshank Redemption",
            producer: "Frank Darabont",
            watched: false,
            genre: "Drama",
            rating: 9.3,
            photo: shawshank,
          },
          {
            id: 3,
            title: "The Hangover",
            producer: "Todd Phillips",
            watched: false,
            genre: "Comedy",
            rating: 7.7,
            photo: "url-to-hangover-photo",
          },
          {
            id: 4,
            title: "A Nightmare on Elm Street",
            producer: "Wes Craven",
            watched: false,
            genre: "Horror",
            rating: 7.5,
            photo: "url-to-nightmare-photo",
          },
          {
            id: 5,
            title: "Inception",
            producer: "Christopher Nolan",
            watched: false,
            genre: "Sci-Fi",
            rating: 8.8,
            photo: "url-to-inception-photo",
          },

    ]
}

///use loadfromlocalstorage to - load empty array or stacked array at start of work

const loadFromLocalStorage = () => { ///every time app refresh, we start here and grab info from localstorage to create array movies [] and render it everywhere
    const serializedState = localStorage.getItem('moviesState');
    if(serializedState === null) {
        // return {movies:[]}; ////static empty array ///return empty array if no info ///
        return initialState; ///return starting movies list that we created earlier (if localstorage is empty)
    }
        return {movies:JSON.parse(serializedState)};///parse string format to array
  

    ///parse localstorage info from string (localstorage has strings always) to array
}
const saveToLocalStorage = (state) => {///state - is global object of state 
    const serializedState = JSON.stringify(state.movies);///array convert to string 
    localStorage.setItem('moviesState',serializedState);

}

// const initialState = loadFromLocalStorage();
 ///if localstorage is empty, use starting array and assign it to initialState
 /// assign array from localStorage to variable for state
const initialStateFromLocalStorage = loadFromLocalStorage();

// function movieReducer(state=initialState,action){ ///old implementation
function movieReducer(state = initialStateFromLocalStorage,action){ ///new 

    switch(action.type){
  
        case 'ADD_MOVIE' :

        ///use maxId 
        const maxId = state.movies.reduce((max,movie) => Math.max(max,movie.id),0)
        ///we go through existing starting movies array with their id's and find the biggest id in array
            return {...state,///creating new state, including all data from previous state, to save all info
                // movies:[...state.movies, {...action.payload,id:movieId++}], ///old variant//// postfix ++, means first element be 1, next movie is 2
                movies:[...state.movies, {...action.payload,id:maxId+1}],//new variant/// new added object will always be bigger than the biggest from existing id's from array

                ///...state.movies - copying existing objects {} from array movies to new array
                   ///creating new field 'movies' that consist of previously added elements + new object
                ///placing to the end of array + add parameter id to that object


            };
            case 'DELETE_MOVIE':
                return {
                    ...state,
                    movies:state.movies.filter(movie => movie.id !== action.payload)///create new array without this movie
               
                    ///id from payload is compared to same id from array 'movies' 
            
                };
                case 'TOGGLE_MOVIE_WATCHED' :
                    ///change status of exact field on exact object
                    return {
                        ...state,//all state copy
                        movies: state.movies.map(movie => movie.id === action.payload ?
                            ///map and search through all objects and FIND exact element by id compared with payload's id 
                           
                            ///if found
                            ///recreate this exact object with other parameters and new parameter 
                            {...movie, watched: !movie.watched}:movie
                            ///or just return current object without changes
                            )
                    };
                     case 'UPDATE_MOVIE':
                        return {
                            ...state,
                            movies: state.movies.map(movie => ///rewrite array again to new fresh array
                                movie.id === action.payload.id ? ///map all existing objects and find that id in array compared to payload's id 
                                ///if found needed movie,
                                {...movie, title:action.payload.title, producer:action.payload.producer}
                                ///or this alternative
                                ///{ ...movie, ...action.payload } 

                                ///info : recreate this exact object to new one, copy ...movie all parameters + change necessary parameters
                                //copy other parameters of movie, change necessary parts and create new movie object,
                                :movie
                                ///or just return object without changes
                                )
                        }
                    default:
                        return state;
    }
}
///to make it clear : 
///example : {
//     moviekey: {
//         movies: [] 
//     },
//     anotherKey: {
//         someOtherState: {} 
//     }
// }
/// moviekey - part of one global "state". Its Controlled with movieReducer 
///array movies is array inside part of state, which movieReducer is processing and editing with actions

///IN CASE TO DELETE LOCALSTORAGE KEY 
// localStorage.removeItem('moviesState');


const store = configureStore({
    reducer:{
        moviekey: movieReducer
    },
    // preloadedState: {moviekey:initialState} ///load initial state
});

store.subscribe(()=> saveToLocalStorage(store.getState().moviekey)) 
//savetolocalstorage (state) - means grab current state and write to localstorage key
////save state movies to localStorage every time it changes


///alternative way (if only one reducer) : const store = configureStore({
//     reducer: movieReducer
// });
///and somewhere you can call const movies = useSelector(state => state.movies); for array

export default store;

