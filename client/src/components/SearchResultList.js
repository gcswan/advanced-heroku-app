import React, { Component } from "react";
import SearchItemContainer from "../containers/SearchItemContainer"

class SearchResultList extends Component {


    render(){
        const movies = this.props.searchResults;
        const movieList = movies.map(function (title, i) {
            if (i < 5) {
            return (<SearchItemContainer key={title.id} movie={title} />)
            } 
            return (<div key={title.id} />);
        }); 
        console.log(this.props)
        
        return (
            <div className="title-list">
               {movieList}
            </div>
        )
    }
}

export default SearchResultList