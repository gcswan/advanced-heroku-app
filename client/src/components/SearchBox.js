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
        let searchTerm = this.state.searchTerm
        this.props.loadSearch(searchTerm);

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