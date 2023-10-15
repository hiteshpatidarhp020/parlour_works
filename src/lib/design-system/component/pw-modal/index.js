import Modal from "react-bootstrap/Modal";
import "./pw-modal.css";

const PwModal = (props) => {
  const { render, ...modalProps } = props;

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body> {render()}</Modal.Body>
    </Modal>
  );
};

export default PwModal;
