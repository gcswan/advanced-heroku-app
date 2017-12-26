import App from "./App";
import { connect } from "react-redux";


function mapStateToProps(state){
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    }
}

export default connect(mapStateToProps)(App);