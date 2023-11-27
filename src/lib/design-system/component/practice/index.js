import React, { useState } from "react";

import WpInput from "../pw-input";
import PwDropdown from "../pw-dropdown";
import { Button } from "react-bootstrap";
import PwModal from "../pw-modal";

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
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <PwModal show={modalShow} kind="success" onClose={handleClose}>
        <button onClick={handleClose}>adsf</button>
      </PwModal>
      <PwDropdown
        width="157px"
        kind="secondary"
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
      />
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
