import React, { useState } from "react";
import "./practice.css";
import WpInput from "../pw-input";
import PwDropdown from "../pw-dropdown";
import { Button } from "react-bootstrap";
import PwModal from "../pw-modal";
import Practice2 from "./practice2";

const Practice = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleValidation = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email === "") {
      setEmailError("Please enter an email address1");
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address1");
    } else {
      setEmailError("");
    }

    if (number === "") {
      setNumberError("Please enter an email address2");
    } else if (number.length < 10) {
      setNumberError("Phone number must be at least 10 digits");
    } else {
      setNumberError("");
    }

    const dropdown = "";
    if (dropdown === "") {
      setDropdown("Please select an item hp");
    }
  };
  //
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };

  return (
    <div className="" style={{ background: "#242834" }}>
      <WpInput
        type="text"
        label="email-1"
        error={emailError}
        value={email}
        stateConfig={setEmail}
      />
      <WpInput
        maxLength={10}
        type="number"
        label="Phone number"
        error={numberError}
        value={number}
        stateConfig={setNumber}
      />

      <WpInput label="city" />
      <PwDropdown
        kind="secondary"
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
        state={dropdown}
        stateConfig={setDropdown}
      />
      <button onClick={handleValidation}>next</button>
      <Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <PwModal show={modalShow} kind="delete" onClose={handleClose}>
        <button onClick={handleClose}>adsf</button>
      </PwModal>
      <Practice2 />
    </div>
  );
};

export default Practice;

//modal
{
  /*<Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <PwModal show={modalShow} kind="delete" onClose={handleClose}>
        <button onClick={handleClose}>adsf</button>

  </PwModal>
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };

  // Dropdown
  <PwDropdown
        width="157px"
        kind="secondary"
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
      />
*/
}
