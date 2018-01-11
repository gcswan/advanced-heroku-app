import App from "./App";
import { connect } from "react-redux";
import { clearSearchResults } from "./actions";
import { getUser } from "./actions";


function mapStateToProps(state){
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList,
        user: state.user
    }
}
function mapDispatchToProps(dispatch){
    return  {
        clearSearchResults: function(){
            const action = clearSearchResults();
            dispatch(action);
        },
        getUser: function(user){
            const action = getUser(user);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);