import React, {Component} from "react";
import SideBarContainer from "../containers/SideBarContainer";



class DisplayEntry extends Component {
  
    
    
    render() {
        const movies = this.props.myMovieList;
        const id = this.props.match.params.id;
        const foundMovie = movies.map((movie) => {
            if(movie._id === id){
                return (
                    <div>
                        <div>
                            <h1>{movie.title}</h1>
                            <p>{movie.jEntry}</p>
                        </div>
                        <div>
                            <button onClick={() => this.props.deleteMovie(movie._id)}>Delete</button>
                            <button>Edit</button>
                        </div>
                    </div>
                )
            }
        });
        console.log("Display component logging props: ", this.props)

        return (
            <div className="main-container">
                <SideBarContainer/>
                <div> 
                    {foundMovie}
                    
                </div>
            </div>
        );
    }
}

export default DisplayEntry;