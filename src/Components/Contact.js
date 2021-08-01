import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Contact = (props) => {
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
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          {props.contactDetails.location}
          <Button href="#" variant="primary" size="sm">
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
