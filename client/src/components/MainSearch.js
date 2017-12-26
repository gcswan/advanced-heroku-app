import React, { Component } from "react";
import SearchBoxContainer from "../containers/SearchBoxContainer";
import SearchResultList from "../components/SearchResultList"


class MainSearch extends Component {
    

    render() {

        return (
            <div>
                <SearchBoxContainer />
                <SearchResultList searchResults={this.props.searchResults} />
            </div>
        )
        
    };
};

export default MainSearch;