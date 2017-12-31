import { connect } from "react-redux";
import SideBar from "../components/SideBar"
import { loadEntries } from "../actions";



function mapStateToProps(state){
    return {
        myMovieList: state.myMovieList
    };
};
function mapDispatchToProps(dispatch){
    return {
        loadEntries: function(){
            dispatch(loadEntries())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);



// OK when you pick this back up.. 
// You are trying to find the bug thats stopping you from using Main.js
// as a container 