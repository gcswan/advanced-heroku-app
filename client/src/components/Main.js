import React, { Component } from "react-redux";
import MainSearch from "./MainSearch"


class Main extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <MainSearch />
            </div>
        )
    }
}

export default Main;