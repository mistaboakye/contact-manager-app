import { Container } from "react-bootstrap";
import Contact from "./Contact";

const Contacts = (props) => {
  return (
    <Container>
      {props.contactsInfo.map((contact, index) => {
        return (
          <Contact
            contactDetails={contact}
            key={index}
            deleteContact={props.deleteContact}
          />
        );
      })}
    </Container>
  );
};

export default Contacts;
