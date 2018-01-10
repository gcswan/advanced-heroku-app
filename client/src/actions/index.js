export function loadSearch(searchTerm) {
    return function(dispatch){
        let apiKey = 'd201dfe99583c2d7fea063e8fcf9b4dd';
        let fetchURL = 'http://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=en-US&query=' + searchTerm + '&page=1'
        let workingApiCall = "https://api.themoviedb.org/3/search/movie?api_key=d201dfe99583c2d7fea063e8fcf9b4dd&language=en-US&query=the%20lion%20king&page=1&include_adult=false"
        dispatch({
            type: "LOAD_SEARCH"
        });
        fetch(fetchURL)
        .then(response => response.json())
        .then(movies => dispatch(searchLoaded(movies)))
        .catch(error => console.log(error))
    };
};

export function searchLoaded(movies){
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results
    };
};

export function saveMovie(movie){
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movie
    };
}

export function createJournalEntry(entry){
        return function(dispatch){
          fetch("/api/movies", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(entry)
          }).then(() => dispatch(loadEntries()))
        };   
}

export function loadEntries(){
    return function(dispatch){
        fetch("/api/movies/")
        .then(response => response.json())
        .then(movies => dispatch(moviesLoaded(movies)))
        .catch(err => console.log(err))
    }
};

export function moviesLoaded(movies){  
    return {
        type: "MY_MOVIES_LOADED",
        value: movies
    }
}


   

    export function deleteMovie(id){
        return function(dispatch){
            console.log("Delete movie is being called with the ID: ", id)
            fetch('/api/movies/' + id + '/',{
                method: "delete"
            })
            .then(response => {
                dispatch(loadEntries())
                return response.json();
            })
            .catch(err => console.log(err))
        }
    };