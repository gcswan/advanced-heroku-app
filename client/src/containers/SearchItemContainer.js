import { connect } from "react-redux";
import SearchItem from "../components/SearchItem";
import { saveMovie } from "../actions";


function mapDispatchToProps(dispatch){
    return {
        saveMovie: function(movie){
            let action = saveMovie(movie);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchItem);