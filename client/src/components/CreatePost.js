import React, {Component} from "react";
import SideBarContainer from "../containers/SideBarContainer";
import { Link, Redirect } from "react-router-dom";



class CreatePost extends Component {
    constructor(){
        super()
        this.state = {
            movie: {
                stars: "",
                jEntry: "",
                redirect: false
            }
        }
    }
    
    handleSubmit(e){
        e.preventDefault()
        const id = this.props.match.params.id;
        this.props.createJournalEntry(this.state.movie);
        this.setState({redirect: true});
    }
    componentWillMount(){
        const movies = this.props.searchResults;
        const id = this.props.match.params.id;
        const foundMovie = movies.find((movie) => {if(movie.id == id){return movie}});
        this.setState({
            movie: Object.assign(this.state.movie, foundMovie)
        })
    }
    render(){
        const movies = this.props.searchResults;
        const id = this.props.match.params.id;
        const foundMovie = movies.find((movie) => {if(movie.id == id){return movie}});
        let backDrop = "http://image.tmdb.org/t/p/original" + foundMovie.backdrop_path;
        if (this.state.redirect === true){
            return <Redirect push to={"/entry/" + id}/>
        }
        return (

            <div className="main-container">
                <SideBarContainer className="side-bar-container" />
                <div className="create-post-container">
                    <div className="movie-info-container">
                        <div className="found-movie-info">
                            <h1>{foundMovie.title}</h1>
                            <h4>TMDB rating: {foundMovie.vote_average}/10</h4>
                        </div>
                        <div className="journal-img-container">
                            <img className="journal-movie-poster"src={backDrop} alt={foundMovie.original_title}></img>
                        </div>
                    </div>
                    <div className="text-area-container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <textarea onChange={(e)=>{
                                const jEntry = {jEntry: e.target.value}
                                this.setState({
                                    movie: Object.assign(this.state.movie, jEntry)
                                })
                            }}className="journal-text"></textarea>
                            <button className="create-entry-button">Create Journal Entry</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;