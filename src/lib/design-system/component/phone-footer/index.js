import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./footer.module.css";
const PhoneFooter = () => {
  return (
    <Navbar className="p-0" fixed="bottom" bg="light" variant="light">
      <Nav className={styles.footermain}>
        <Nav.Item>
          <Nav.Link href="#home" className="nav-link-item">
            <div className={styles.itemsection}>
              <h1>sda</h1>
              Home
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#search" className="nav-link-item">
            <div className={styles.itemsection}>
              <h1>sda</h1>
              Search
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#add" className="nav-link-item">
            <div className={styles.itemsection}>
              <h1>sda</h1>
              Add
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#favorites" className="nav-link-item">
            <div className={styles.itemsection}>
              <h1>sda</h1>
              Favorites
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default PhoneFooter;
