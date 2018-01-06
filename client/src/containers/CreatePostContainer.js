import { connect } from "react-redux";
import CreatePost from "../components/CreatePost"
import {createJournalEntry} from "../actions";


function mapStateToProps(state){
    return {
        myMovieList: state.myMovieList,
        searchResults: state.searchResults
    };
};
function mapDispatchToProps(dispatch){
    return {
        createJournalEntry: function(entry){
            dispatch(createJournalEntry(entry));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);