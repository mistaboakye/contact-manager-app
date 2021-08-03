import { Button, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import EditContactInfo from "./EditContactForm";

const Contact = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactDetails.id);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.contactDetails.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.contactDetails.number}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {props.contactDetails.location}
          </Card.Subtitle>
          <Button href="#" variant="primary" size="sm" onClick={handleShow}>
            Edit
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Contact Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditContactInfo
                contactInfo={props.contactDetails}
                updateContact={props.updateContact}
                closeModal={handleClose}
              />
            </Modal.Body>
          </Modal>
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
