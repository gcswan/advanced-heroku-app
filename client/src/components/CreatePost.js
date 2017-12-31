import React, {Component} from "react";
import SideBarContainer from "../containers/SideBarContainer"


class CreatePost extends Component {
    constructor(){
        super()
    }
    render(){
        console.log("this is createPost logging props: ", this.props)
        return (
            <div className="main-container">

                <SideBarContainer className="side-bar-container" />
                <div className="create-post-container">
                    <h1>This is the CreatePost Component</h1>
                    <div>this is where the movie and title info will go</div>
                    <form>
                        <textarea className="journal-text"></textarea>
                        <button className="search-button">Create Journal Entry</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost;