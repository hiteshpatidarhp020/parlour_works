import React from "react";
import PwIcon from "../../pw-icon";
import PwSpace from "../../pw-space";
import PwText from "../../pw-text";
import PwButton from "../../pw-button";

const DeletemModal = (props) => {
  const { onClose } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      <PwIcon className="crossicon" />
      <PwSpace value="30px" />
      <PwIcon />
      <PwSpace value="30px" />
      <PwText
        text="Are you sure you want to delete"
        appearance="heading_s_medi"
      />
      <PwText text="the service ?" appearance="heading_s_medi" />
      <PwSpace value="40px" />
      <PwButton
        width="130px"
        marginLeft="50px"
        onClick={handleCancel}
        label="Delete"
        kind="secondary"
      />
      <PwSpace value="30px" />
    </div>
  );
};

export default DeletemModal;
