import { configureStore } from "@reduxjs/toolkit";
import furyroad from "../img/max.jpeg";
import shawshank from "../img/shaw.jpg";
import forsazh from "../img/forsazh.jpg";
import joker2 from "../img/joker2.png";
import hangover from "../img/hangover.jpg";
import freddy from "../img/freddy.jpg";
import inception from "../img/inception.jpg"
import smile from "../img/smile.jpeg"
import gosling from "../img/gosling.jpeg"
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
            description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.'
          },
          {
            id: 2,
            title: "2 Fast 2 Furious",
            producer: "Neal H. Moritz",
            watched: false,
            genre: "Action",
            rating: 10,
            image: forsazh,
            description: 'Ex-LAPD officer Brian O Conner has escaped to Miami and is in hiding, after aiding wanted felon Dominic Toretto in Los Angeles escape from authorities. He makes a living by street racing, driving his 1999 Nissan R34 Skyline GT-R in events organized by his friend, mechanic Tej Parker'
          },

          {
            id: 3,
            title: "The Shawshank Redemption",
            producer: "Frank Darabont",
            watched: false,
            genre: "Drama",
            rating: 9.3,
            image: shawshank,
            description:'A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.'
          },
          {
            id: 4,
            title: "Joker",
            producer: "Todd Phillips",
            watched: false,
            genre: "Drama",
            rating: 9.3,
            image: joker2,
            description:'Arthur Fleck, a failed clown and aspiring stand-up comedian whose descent into mental illness and nihilism culminates with the emergence of an alter-ego known as "Joker" and inspires a violent countercultural revolution against the wealthy in a decaying Gotham City'
          },
          {
            id: 5,
            title: "The Hangover",
            producer: "Todd Phillips",
            watched: false,
            genre: "Comedy",
            rating: 7.7,
            image: hangover,
            description:'Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding.'
          },
          {
            id: 6,
            title: "Central Intelligence",
            producer: "Todd Phillips",
            watched: false,
            genre: "Comedy",
            rating: 7.7,
            image: hangover,
            description:'Three buddies wake up from a bachelor party in Las Vegas with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend in time for his wedding.'
          },
          {
            id: 7,
            title: "A Nightmare on Elm Street",
            producer: "Wes Craven",
            watched: false,
            genre: "Horror",
            rating: 7.5,
            image: freddy,
            description:'A group of teenagers who are targeted by Krueger, an undead child killer who murders teenagers through their dreams, as retribution against their parents who burned him alive'
          },
          {
            id: 8,
            title: "Smile",
            producer: "Parker Finn",
            watched: false,
            genre: "Horror",
            rating: 7.5,
            image: smile,
            description:'At a psychiatric ward in Newark, New Jersey, therapist Rose Cotter meets graduate student Laura Weaver, who explains that she recently witnessed her professor kill himself. Laura claims to be terrorized by an invisible entity that appears as various smiling people and has foretold her death'
          },
          {
            id: 9,
            title: "Inception",
            producer: "Christopher Nolan",
            watched: false,
            genre: "Sci-Fi",
            rating: 8.8,
            image: inception,
            description:'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster'

          },
          {
            id: 10,
            title: "Blade Runner 2049",
            producer: "Denis Villeneuve",
            watched: false,
            genre: "Sci-Fi",
            rating: 8.8,
            image: gosling,
            description:'Young Blade Runner Ks discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, whos been missing for thirty years.'

          }

    ]
}

///use loadfromlocalstorage to - load empty array or stacked array at start of work

const loadFromLocalStorage = () => { ///every time app refresh, we start here and grab info from localstorage to create array movies [] and render it everywhere
    const serializedState = localStorage.getItem('moviesState');
    if(serializedState === null) {
        // return {movies:[]}; 
        return initialState; ///return starting movies list that we created earlier (if localstorage is empty)
    }
        return {movies:JSON.parse(serializedState)};///parse string format to array
  

    ///parse localstorage info from string (localstorage has strings always) to array
}
const saveToLocalStorage = (state) => {
    const serializedState = JSON.stringify(state.movies);///save only array movies from state
    localStorage.setItem('moviesState',serializedState);

}


 ///if localstorage is empty, use starting array and assign it to initialState
 /// assign array from localStorage to variable initialStateFromLocalStorage
const initialStateFromLocalStorage = loadFromLocalStorage();


function movieReducer(state = initialStateFromLocalStorage,action){ 

    switch(action.type){
  
        case 'ADD_MOVIE' :
        ///use maxId 
        const maxId = state.movies.reduce((max,movie) => Math.max(max,movie.id),0)
        ///we go through existing starting movies array with their id's and find the biggest id in array
////process of reducing : 
// 1. max = Math.max(0, 1) -> 1
// 2. max = Math.max(1, 2) -> 2
// 3. max = Math.max(2, 3) -> 3
// 4. max = Math.max(3, 4) -> 4
// 5. max = Math.max(4, 5) -> 5


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
                                ///if found this movie,
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

// /IN CASE TO DELETE LOCALSTORAGE KEY 
// localStorage.removeItem('moviesState');


const store = configureStore({
    reducer:{
        moviekey: movieReducer
    },
    // preloadedState: {moviekey:initialState} ///load initial state
});

store.subscribe(()=> saveToLocalStorage(store.getState().moviekey)) 
///means send to function part of state with key moviekey


///alternative way (if only one reducer) : const store = configureStore({
//     reducer: movieReducer
// });
///and somewhere you can call const movies = useSelector(state => state.movies); for array

export default store;

