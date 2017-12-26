import {combineReducers} from "redux";

function searchResults(state = [], action){
    if(action.type === "SEARCH_RESULTS_LOADED"){
        return action.value;
    }
    return state;
}

function myMovieList(state = [], action){
    if(action.type === "MY_MOVIES_LOADED"){
        console.log("myMovieList reducer function logging what was recieved: ", action.value)
        return [
            ...state,
            action.value
        ]
    }
    return state;
}

const rootReducer = combineReducers({searchResults, myMovieList});

export default rootReducer;