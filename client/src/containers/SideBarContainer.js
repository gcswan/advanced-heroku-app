import { connect } from "react-redux";
import SideBar from "../components/SideBar"


function mapStateToProps(state){
    return {
        myMovieList: state.myMovieList
    };
};

export default connect(mapStateToProps)(SideBar);



// OK when you pick this back up.. 
// You are trying to find the bug thats stopping you from using Main.js
// as a container 