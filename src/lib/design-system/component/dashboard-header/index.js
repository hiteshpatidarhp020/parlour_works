import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./dashboard-header.module.css";
import PwButton from "../pw-button";
import PwDropdown from "../pw-dropdown";
import PwProfileLogo from "../pw-kblogo";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.headermain}>
      <Nav className="me-auto"></Nav>
      <Nav className="d-flex">
        <Nav.Link className="d-flex" eventKey={2} href="#memes">
          <PwButton label="New sale" kind="primary" className={styles.buttonmain}/>
          <PwDropdown
        // width="157px"
        className={styles.drop}
        height="40px"
        kind="secondary"
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
      />
      <div className={styles.logomain}>
          <PwProfileLogo />
          </div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
