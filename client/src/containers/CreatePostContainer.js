import { connect } from "react-redux";
import CreatePost from "../components/CreatePost"


function mapStateToProps(state){
    return {
        myMovieList: state.myMovieList
    };
};

export default connect(mapStateToProps)(CreatePost);