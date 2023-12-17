import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./footer.module.css";
import PwText from "../pw-text";
import IcPhoneHome from "../../icons/IcPhoneHome";
import PwIcon from "../pw-icon";
import IcReportsIcon from "../../icons/IcReportsIcon";
import IcPhoneService from "../../icons/IcPhoneService";
import IcPhoneStaff from "../../icons/IcPhoneStaff";

const PhoneFooter = () => {
  return (
    <Navbar className="p-0" fixed="bottom" bg="light" variant="light">
      <Nav className={styles.footermain}>
        <Nav.Item>
          <Nav.Link href="#home" className="nav-link-item">
            <div className={styles.itemsection}>
              <PwIcon ic={<IcPhoneHome />} />
              <PwText text="Home" appearance="body_m_r"/>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#search" className="nav-link-item">
            <div className={styles.itemsection}>
            <PwIcon ic={<IcReportsIcon />} />
              <PwText text="Reports" appearance="body_m_r"/>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#add" className="nav-link-item">
            <div className={styles.itemsection}>
            <PwIcon ic={<IcPhoneService />} />
              <PwText text="Service" appearance="body_m_r"/>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#favorites" className="nav-link-item">
            <div className={styles.itemsection}>
            <PwIcon ic={<IcPhoneStaff />} />
              <PwText text="Staff" appearance="body_m_r"/>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default PhoneFooter;
