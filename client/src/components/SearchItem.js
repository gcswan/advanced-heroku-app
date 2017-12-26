import React, {Component} from "react";

class SearchItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: []
        }

    }
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
    
        return (
            <div className="search-item">
                {image()}
                <h6>TITLE: {this.props.movie.original_title}</h6>
                <h6>RELEASE DATE: {this.props.movie.release_date}</h6>
                <h6>RATING: {this.props.movie.vote_average}/10</h6>
                <button onClick={this.handleClick.bind(this)} className="write-button">Write About It</button>
            </div>
        );
    }
}
export default SearchItem;