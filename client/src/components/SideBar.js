import React, { Component } from "react";

class SideBar extends Component {
    
    render(){
        const movies = this.props.myMovieList;
        const myMovies = movies.map((movie)=> {
            return (
                <h6 key={movie.id}>{movie.title}</h6>
            )
        })
        return (
            <div className="side-bar-container">
                <h3 className="center-text">My Movies</h3>
                <div>
                    {myMovies}
                </div>
            </div>
        )  
    }
}


export default SideBar;