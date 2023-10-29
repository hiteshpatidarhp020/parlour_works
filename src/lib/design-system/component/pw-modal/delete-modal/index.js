import React from "react";

const DeletemModal = (props) => {
  const { onClose } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      Delete
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default DeletemModal;
