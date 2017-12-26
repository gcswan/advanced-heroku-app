import React, { Component } from "react-redux";
import MainSearchContainer from "../containers/MainSearchContainer"
import SideBarContainer from "../containers/SideBarContainer"


class Main extends Component {
    render(){
        return (
            <div>
                <SideBarContainer />
                <MainSearchContainer />
            </div>
        )
    };
};

export default Main;