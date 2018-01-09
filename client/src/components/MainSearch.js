import React, { Component } from "react";
import SearchBoxContainer from "../containers/SearchBoxContainer";
import SearchResultList from "../components/SearchResultList"


class MainSearch extends Component {
    
    
    render() {

        return (
            <div className="main-search-container">
                <SearchBoxContainer className="search-box" />
                <SearchResultList className="title-list" searchResults={this.props.searchResults} />
            </div>
        )
        
    };
};

export default MainSearch;