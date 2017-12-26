export function loadSearch(searchTerm) {
    return function(dispatch){
        let apiKey = 'd201dfe99583c2d7fea063e8fcf9b4dd';
        let fetchURL = 'http://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=en-US&query=' + searchTerm + '&page=1'
        let workingApiCall = "https://api.themoviedb.org/3/search/movie?api_key=d201dfe99583c2d7fea063e8fcf9b4dd&language=en-US&query=the%20lion%20king&page=1&include_adult=false"
        console.log("called loadSearch action with: ", searchTerm, "fetch URL: ", fetchURL);
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
    console.log("saveMovie was called with the movie: ", movie)
    return {
        type: "MY_MOVIES_LOADED",
        value: movie
    };
}