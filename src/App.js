import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  addNewContact = (contact) => {
    contact.id = 100 + Math.random() * 459;
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = (id) => {
    let deleteContactId = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: deleteContactId });
  };

  updateContact = (id, editedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? editedContact : contact
      ),
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h1>Contact Form</h1>
            <ContactForm newContact={this.addNewContact} />
          </div>
          <div className="col-md-8">
            <h1>Contact List</h1>
            <Contacts
              contactsInfo={this.state.contacts}
              deleteContact={this.deleteContact}
              updateContact={this.updateContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
