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
                return (
                    <div>
                        <div>
                            <h1>{movie.title}</h1>
                            <p>{movie.jEntry}</p>
                        </div>
                        <div>
                            <button onClick={()=>this.handleClick(movie._id)}>Delete</button>
                            <button>Edit</button>
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
                <SideBarContainer/>
                <div> 
                    {foundMovie}
                    
                </div>
            </div>
        );
    }
}

export default DisplayEntry;