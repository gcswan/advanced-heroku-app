import React, {Component} from "react";
import {Link} from "react-router-dom";

class SearchItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: []
        }

    }
    // this is what I was using to save the movie to myMovieList
    // I had the onClick on the write about it button but I think It was interfering 
    // with React Router tryin something else for now
    handleClick(e){
        this.props.saveMovie(this.props.movie)
    }

    render(){
        let backDrop = "http://image.tmdb.org/t/p/original" + this.props.movie.backdrop_path;  
        const image = () => {
            if(this.props.movie.backdrop_path){
                return <img alt={this.props.movie.original_title} className="movie-poster" src={backDrop}></img>
            }
            return <img alt="not-available" className="movie-poster" src="https://d2cmub9v8qb8gq.cloudfront.net/0.17.0/static/img/no-image-available.jpg"></img>
        }  
        
        let movie = this.props.movie;
        let movieId = this.props.movie.id
        return (
            <div className="search-item">
                {image()}
                <h6>TITLE: {this.props.movie.original_title}</h6>
                <h6>RELEASE DATE: {this.props.movie.release_date}</h6>
                <h6>RATING: {this.props.movie.vote_average}/10</h6>
                <button className="write-button">
                    <Link to={"/create/" + movieId }>Write About It</Link>
                </button>
            </div>
        );
    }
}
export default SearchItem;