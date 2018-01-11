import React, {Component} from "react";
import SideBarContainer from "../containers/SideBarContainer";
import {Redirect} from "react-router-dom";



class DisplayEntry extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }
    handleClick(id){
        this.props.deleteMovie(id);
        this.setState({redirect: true});

    }
    
    render() {
        const movies = this.props.myMovieList;
        const id = this.props.match.params.id;
        const foundMovie = movies.map((movie) => {
            if( movie._id === id || movie.id === id ){
                let backDrop = "http://image.tmdb.org/t/p/original" + movie.backdrop_path;
                
                return (
                    <div>
                        <div className="display-movie-info">
                            <div className="found-movie-info">
                                <h1>{movie.title}</h1>
                                <h4>TMDB rating: {movie.vote_average}/10</h4>
                            </div>
                            <div className="journal-img-container">
                                <img className="journal-movie-poster"src={backDrop} alt={movie.original_title}></img>
                            </div>
                        </div>
                        <div className="display-journal-entry">
                            <p>{movie.jEntry}</p>
                        </div>
                        <div className="display-delete-container">
                            <button className="display-delete-button"onClick={()=>this.handleClick(movie._id)}>Delete</button>
                        </div>
                    </div>
                )
            }
        });
        if (this.state.redirect === true){
            return <Redirect push to={'/'}/>
        }

        return (
            <div className="main-container">
                <SideBarContainer className="side-bar-container"/>
                <div className="display-entry-container"> 
                    {foundMovie}
                </div>
            </div>
        );
    }
}

export default DisplayEntry;