import React, { Component } from "react";
import MainSearchContainer from "../containers/MainSearchContainer"
import SideBarContainer from "../containers/SideBarContainer"


class Main extends Component {
    render(){
        return (
            <div className="main-container">
                <SideBarContainer />
                <MainSearchContainer />
            </div>
        )
    };
};

export default Main;