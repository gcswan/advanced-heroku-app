import React, {Component} from "react";
import SideBarContainer from "../containers/SideBarContainer"


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
        const id = this.props.match.params.id;
        const movies = this.props.myMovieList;
        const foundMovie = movies.find((movie) => {if(movie.id == id){return movie}});
        this.setState({
            movie: Object.assign(this.state.movie, foundMovie)
        })
    }
    render(){ 
        return (

            <div className="main-container">
                <SideBarContainer className="side-bar-container" />
                <div className="create-post-container">
                    <h1>This is the CreatePost Component</h1>
                    <div>this is where the movie and title info will go</div>
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
        )
    }
}

export default CreatePost;