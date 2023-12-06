import React from "react";
import styles from "./phone-header.module.css";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import PwIcon from "../pw-icon";
import IcAlert from "../../icons/IcAlert";
import PwSpace from "../pw-space";
import PwKBLogo from "../pw-kblogo";
import SaleTabe from "./sale-tabe";

const PhoneHeader = () => {
  return (
    <div className={`${styles.pheadermain} px-4`}>
      <Navbar className={` ${styles.pheadersection}`}>
        <Navbar.Collapse className="align-items-start">
          <div>sdfs</div>
          <Container>
            <div>sdfdsdafdf adfsdfgfdg</div>
            <div>sdfdsdafdf</div>
          </Container>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <PwKBLogo />
        </Navbar.Collapse>
      </Navbar>
      <PwSpace value="30px" />
      <h1 className="text-white">sdaf</h1>
      <SaleTabe />
    </div>
  );
};

export default PhoneHeader;
