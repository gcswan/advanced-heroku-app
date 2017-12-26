import { connect } from "react-redux";
import SideBar from "../components/SideBar"


function mapStateToProps(state){
    return {
        myMovieList: state.myMovieList
    };
};

export default connect(mapStateToProps)(SideBar);