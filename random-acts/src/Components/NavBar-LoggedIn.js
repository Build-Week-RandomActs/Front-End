import React from "react";
import { NavLink, Route } from "react-router-dom";
import "../css/navbar.css";

import Contacts from "./Contacts/Contacts";
import Acts from "./Acts/Acts";
import Welcome from "./Welcome";

class NavBarLoggedIn extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="nav">
        <div>
          <img
            src="https://live.staticflickr.com/65535/48728141972_6422f12840_m.jpg"
            alt="random acts"
          />
        </div>
        <div className="links">
          <NavLink className="link" to="/contacts">
            Contacts
          </NavLink>
          <NavLink className="link" to="/acts">
            Acts
          </NavLink>
          <NavLink className="link" to="/" onClick={this.logout}>
            Log Out
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBarLoggedIn;
