import {combineReducers} from "redux";

function searchResults(state = [], action){
    if(action.type === "SEARCH_RESULTS_LOADED"){
        return action.value;
    }
    return state;
}


function myMovieList(state = [], action){
    if(action.type === "MY_MOVIES_LOADED"){
        return action.value
    }
    return state;
}

function user(state="", action){
    if(action.type === "GOT_USER"){
        return action.value
    }
    return state;
}

const rootReducer = combineReducers({searchResults, myMovieList});

export default rootReducer;