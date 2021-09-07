import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateContact } from "../source/contactAction";

export class EditContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contactInfo.name,
      number: this.props.contactInfo.number,
      location: this.props.contactInfo.location,
      id: this.props.contactInfo.id,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateContact(this.state.id, this.state);
    this.setState({
      name: "",
      number: "",
      location: "",
    });
    console.log("Submited Successfully", this.state);
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  updateContact,
};
export default connect(mapStatetoProps, mapDispatchToProps)(EditContactForm);
