import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./header.module.css";
import PwButton from "../pw-button";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.headermain}>
      <Nav className="me-auto"></Nav>
      <Nav>
        <Nav.Link className={styles.headercon} eventKey={2} href="#memes">
          <PwButton label="New sale" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
