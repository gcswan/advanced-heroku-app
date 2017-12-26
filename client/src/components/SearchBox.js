import React, {Component} from "react";

class SearchBox extends Component {
    constructor(props){
        super(props)
        this.state= {
            searchTerm: ""
        }
        
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        console.log("SearchBox Props: ", this.props)

    }
    render() {
        
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={(e)=>{
                        this.setState({
                            searchTerm: e.target.value
                        })
                    }} placeholder="Search For a Movie"/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBox;