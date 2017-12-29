import {combineReducers} from "redux";

function searchResults(state = [], action){
    if(action.type === "SEARCH_RESULTS_LOADED"){
        return action.value;
    }
    return state;
}
function findMovie(array, movie){
    array.find()
}
function myMovieList(state = [], action){
    console.log("this is the myMovieList reducer logging the state of myMovieList: ", state)
    if(action.type === "MY_MOVIES_LOADED"){
        
        return [
            ...state,
            action.value
        ]
    }
    return state;
}

const rootReducer = combineReducers({searchResults, myMovieList});

export default rootReducer;