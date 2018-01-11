import React, {Component} from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class TopNavbar extends Component {
  constructor(props){
    super()
  }
  
  
  render() {
    let showUser = "";
    if(this.props.showNavItems){
      showUser = this.props.username
    }
    const navBarStyle = {
      backgroundColor: "black",
      width: "100%",
      display: "flex",
      webkitBorderRadius: "0px 0px",
      flexDirection: "row",
      justifyContent: "space-around",
      textAlign: "right"
    }
    const navItemStyle = {
      fontSize: "18px",
      justifyContent: "space-around",
      float: "left"
    }
    const navTitle = {
      color: "white",
      marginLeft: "-50px"
    }
    return (
      <Navbar style={navBarStyle} inverse collapseOnSelect>
        <Nav style={navTitle}pullLeft>
            <h3>Movie Journal</h3>
        </Nav>
        <Navbar.Collapse>
          
          <Nav pullRight>
            <NavItem style={navItemStyle}><Link to="/">Home</Link></NavItem>
            <NavItem style={navItemStyle} onClick={this.props.onSignOut}>Sign Out</NavItem>
            <NavItem style={navItemStyle}>{showUser}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
}
 
export default TopNavbar;



  
  // let navItems = "";
  // if (props.showNavItems) {
  //   // navItems = (
  //   //           <div>
  //   //             <Nav pullRight>
  //   //               <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
  //   //             </Nav>
  //   //           </div>
  //   }    