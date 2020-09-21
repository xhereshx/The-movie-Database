import React from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // navigation bar code
    return (
      <div className="navBackground">
        <h1>{this.props.mainTitle}</h1>
        <div className="linkdiv">
          <NavLink to="/" className="color">
            Main Page
          </NavLink>
          <NavLink to="/SearchMovie" className="color">
            Find Movie
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
