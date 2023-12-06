import Modal from "react-bootstrap/Modal";
import DeletemModal from "./delete-modal";
import SuccessModal from "./success-modal";
import AlertmModal from "./alert-model";
import style from "./pw-modal.module.css";

const PwModal = (props) => {
  const { kind, children, show, onClose, ...modalProps } = props;

  return (
    <div>
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
          {kind !== "success" && kind !== "delete" && kind !== "alert"
            ? children
            : null}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PwModal;
