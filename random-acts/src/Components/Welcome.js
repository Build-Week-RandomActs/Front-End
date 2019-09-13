import React from "react";

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
      <div>
        <img
          src="https://live.staticflickr.com/65535/48724482442_625b483666.jpg"
          alt="main"
        />
        <button onClick={this.contacts}>Contacts</button>
        <button onClick={this.acts}>Acts</button>
      </div>
    );
  }
}

export default Welcome;
