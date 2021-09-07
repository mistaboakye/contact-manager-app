import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { connect } from "react-redux";
import { addContact, deleteContact } from "./source/contactAction";
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";

class App extends Component {
  addNewContact = (contact) => {
    contact.id = 100 + Math.random() * 459;
    this.props.addContact(contact);
  };

  deleteContact = (id) => {
    this.props.deleteContact(id);
  };

  updateContact = (id, editedContact) => {
    this.setState({
      contacts: this.props.contacts.map((contact) =>
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
              contactsInfo={this.props.contacts}
              deleteContact={this.props.deleteContact}
              updateContact={this.updateContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  addContact,
  deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
