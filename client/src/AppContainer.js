import App from "./App";
import { connect } from "react-redux";
import { clearSearchResults } from "./actions"


function mapStateToProps(state){
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    }
}
function mapDispatchToProps(dispatch){
    return  {
        clearSearchResults: function(){
            const action = clearSearchResults();
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);