import React from "react";
import { NavLink, Route } from "react-router-dom";
import "../css/navbarloggedout.css";

import Home from "./Home";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

class NavBarLoggedOut extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

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
          <NavLink className="link" exact to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/login">
            Log In
          </NavLink>
          <NavLink className="link" to="/register">
            Register
          </NavLink>
        </div>
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
      </div>
    );
  }
}

export default NavBarLoggedOut;
