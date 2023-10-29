import { useState } from "react";
import PwModal from "../pw-modal";
import { Button } from "react-bootstrap";
import "./practice.css";

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
      <Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <PwModal show={modalShow} kind="delete" onClose={handleClose}>
        <button onClick={handleClose}>adsf</button>
        {/*<div>modify Content here</div>*/}
      </PwModal>
    </div>
  );
};

export default Practice;
