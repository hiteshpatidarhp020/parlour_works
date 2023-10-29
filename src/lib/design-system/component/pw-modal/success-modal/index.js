import React from "react";

const SuccessModal = (props) => {
  const { onClose } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      SuccessModal
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default SuccessModal;
