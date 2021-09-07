import { Container } from "react-bootstrap";
import Contact from "./Contact";

const Contacts = (props) => {
  return (
    <Container>
      {props.contactsInfo.map((contact) => {
        return (
          <Contact
            contactDetails={contact}
            key={contact.id}
            deleteContact={props.deleteContact}
            updateContact={props.updateContact}
          />
        );
      })}
    </Container>
  );
};

export default Contacts;
