import React from "react";
import "../css/welcome.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  contacts = event => {
    this.props.history.push("/contacts");
  };

  acts = event => {
    this.props.history.push("/acts");
  };

  render() {
    return (
      <div className="welcome">
        <img
          src="https://live.staticflickr.com/65535/48724482442_625b483666.jpg"
          alt="main"
        />
        <div className="buttons">
          <button onClick={this.contacts}>Contacts</button>
          <button onClick={this.acts}>Acts</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
