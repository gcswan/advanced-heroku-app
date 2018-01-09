import MainSearch from "../components/MainSearch";
import { connect } from "react-redux";

function mapStateToProps(state){
    return {
        searchResults: state.searchResults
    }
};




export default connect(mapStateToProps)(MainSearch);