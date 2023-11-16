import Modal from "react-bootstrap/Modal";
import "./pw-modal.css";
import DeletemModal from "./delete-modal";
import SuccessModal from "./success-modal";

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
        {kind !== "success" && kind !== "delete" ? children : null}
      </Modal.Body>
    </Modal>
  );
};

export default PwModal;

{
  /*
    const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(false);
  };

  const handleOpenModal = () => {
    setModalShow(true);
  };
  /////////////////////////////////////
  <Button variant="primary" onClick={handleOpenModal}>
Open Modal
</Button>
<PwModal show={modalShow} kind="delete" onClose={handleClose}>
<button onClick={handleClose}>adsf</button>
<div>modal modify Content here</div>
</PwModal>*/
}
