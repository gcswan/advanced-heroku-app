import React, {Component} from "react";
import SideBarContainer from "../containers/SideBarContainer";



class CreatePost extends Component {
    constructor(){
        super()
        this.state = {
            movie: {
                stars: "",
                jEntry: ""
            }
        }
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.props.createJournalEntry(this.state.movie);
        console.log(this.state.movie)
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
        console.log("this is CreatePost logging the found movie prop: ", foundMovie);
        
        let backDrop = "http://image.tmdb.org/t/p/original" + foundMovie.backdrop_path;
        
        return (

            <div className="main-container">
                <SideBarContainer className="side-bar-container" />
                <div className="create-post-container" style={{backgroundImage: 'url(' + backDrop + ')'}}>
                    <div className="movie-info-container">
                        <h1>{foundMovie.title}</h1>
                    </div>
                    <div className="text-area-container">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <textarea onChange={(e)=>{
                                const jEntry = {jEntry: e.target.value}
                                this.setState({
                                    movie: Object.assign(this.state.movie, jEntry)
                                })
                            }}className="journal-text"></textarea>
                            <button className="search-button">Create Journal Entry</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;