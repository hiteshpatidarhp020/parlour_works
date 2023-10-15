import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PwText from "../pw-text";

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
      <Modal.Header> {render()}</Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
};

export default PwModal;
