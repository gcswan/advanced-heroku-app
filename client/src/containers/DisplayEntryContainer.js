import { connect } from "react-redux";
import DisplayEntry from "../components/DisplayEntry";
import { deleteMovie } from "../actions";


function mapStateToProps(state){
    return {
        myMovieList: state.myMovieList
    }
};
function mapDispatchToProps(dispatch){
    return {
        deleteMovie: function(movie){
            const action = deleteMovie(movie);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEntry);