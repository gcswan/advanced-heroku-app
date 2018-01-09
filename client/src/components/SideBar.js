import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
    componentDidMount(){
        this.props.loadEntries();
    }
    
    render(){

        const movies = this.props.myMovieList;
        const myMovies = movies.map((movie) => {
            const id = movie._id
            return (
                <div key={movie.id} className="my-movie-list">
                    <Link to={"/entry/" + id}>{movie.title}</Link>
                </div>
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