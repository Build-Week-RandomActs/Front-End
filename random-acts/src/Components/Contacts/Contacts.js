import React from "react";
import axios from "axios";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      contacts: []
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("https://random-acts-webpt5.herokuapp.com/api/contacts", options)
      .then(res => {
        this.setState({
          contacts: res.data,
          loggedIn: true
        });
      })
      .catch(error => {
        this.setState({
          loggedIn: false
        });
      });
  };

  contacts = () => {
    if (this.state.loggedIn) {
      return (
        <div>
          <h2>Contacts</h2>
          {this.state.contacts.map(contact => {
            return (
              <div key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>You need to be logged in!</div>;
    }
  };

  render() {
    return <this.contacts />;
  }
}

export default Contacts;
