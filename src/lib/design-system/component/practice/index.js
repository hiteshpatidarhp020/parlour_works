import React, { useState } from "react";
import "./practice.css";
import WpInput from "../pw-input";
import PwDropdown from "../pw-dropdown";
import { Button } from "react-bootstrap";
import PwModal from "../pw-modal";


const Practice = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [email2, setEmail2] = useState("");
  const [error2, setError2] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleValidation = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email === "") {
      setError("Please enter an email address1");
    } else if (!emailRegex.test(email)) {
      setError("Invalid email address1");
    } else {
      setError("");
    }

    if (email2 === "") {
      setError2("Please enter an email address2");
    } else if (email2.length < 10) {
      setError2("Phone number must be at least 10 digits");
    } else {
      setError2("");
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
        error={error}
        email={email}
        setEmail={setEmail}
        validate={true}
      />
      <WpInput
        maxLength={10}
        type="number"
        label="Phone number"
        error={error2}
        email={email2}
        setEmail={setEmail2}
        validate={true}
      />
      <WpInput label="email-3" />
      <PwDropdown
        // width="175px"
        kind="secondary"
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
        state={dropdown}
        stateConfig={setDropdown}
      />

      <button onClick={handleValidation}>next</button>
      <Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      {/* <Practice2 /> */}
      <PwModal show={modalShow} kind="alert" onClose={handleClose}>
        <button onClick={handleClose}>adsf</button>
      </PwModal>
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
