import Modal from "react-bootstrap/Modal";
import "./pw-modal.css";
import DeletemModal from "./delete-modal";
import SuccessModal from "./success-modal";
import AlertmModal from "./alert-model";

const PwModal = (props) => {
  const { kind, children, show, onClose, ...modalProps } = props;

  return (
    <Modal
      {...modalProps}
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
    >
      <Modal.Body>
        {kind === "success" ? <SuccessModal onClose={onClose} /> : null}
        {kind === "delete" ? <DeletemModal onClose={onClose} /> : null}
        {kind === "alert" ? <AlertmModal onClose={onClose} /> : null}
        {kind !== "success" && kind !== "delete" && kind !== "alert" ? children : null}
      </Modal.Body>
    </Modal>
  );
};

export default PwModal;