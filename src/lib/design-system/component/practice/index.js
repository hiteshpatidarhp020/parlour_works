import { useState } from "react";
import PwModal from "../pw-modal";
import { Button } from "react-bootstrap";
import "./practice.css";
import PwDropdown from "../pw-dropdown";
import PwButton from "../pw-button";

const Practice = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };

  return (
    <div>
      <Button variant="primary"onClick={handleOpenModal}>
        Open Modal
      </Button>
      <PwModal show={modalShow} kind="delete" onClose={handleClose}>
        <button onClick={handleClose}>adsf</button>

  </PwModal>
      <PwDropdown
        width="157px"
        kind=""
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
      />
    </div>
  );
};

export default Practice;
