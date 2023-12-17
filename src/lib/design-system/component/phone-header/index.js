import React from "react";
import styles from "./phone-header.module.css";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import PwIcon from "../pw-icon";
import IcAlert from "../../icons/IcAlert";
import PwSpace from "../pw-space";
import PwKBLogo from "../pw-kblogo";
import SaleTabe from "./sale-tabe";
import PwText from "../pw-text";
import PwDropdown from "../pw-dropdown";
import PwProfileLogo from "../pw-kblogo";
import IcPhoneHome from "../../icons/IcPhoneHome";
import IcParlourLogo from "../../icons/IcParlourLogo";
import IcPhoneLogo from "../../icons/IcPhoneLogo";
import PwLink from "../pw-link";

const PhoneHeader = () => {
  return (
    <div className={`${styles.pheadermain} px-4`}>
      <Navbar className={` ${styles.pheadersection}`}>
        <Navbar.Collapse className="align-items-start">
          <PwIcon ic={<IcPhoneLogo />}/>
          <Container>
          <PwIcon className={styles.parlouricon} ic={<IcParlourLogo/>}/>
          <PwDropdown
          // width="157px"
          className={styles.drop}
          height="40px"
          kind="secondary"
          dropItems={["vivo", "iphone", "laptop", "Hp"]}
          />
          <PwLink linkprop="View Calender "/>
          </Container>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <div className={styles.proic}>
          <PwProfileLogo />
          </div>
        </Navbar.Collapse>
      </Navbar>
      <PwSpace value="30px" />

      <SaleTabe />
    </div>
  );
};

export default PhoneHeader;
