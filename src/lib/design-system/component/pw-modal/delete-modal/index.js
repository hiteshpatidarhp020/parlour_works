import React from "react";
// import "./delete.css"
import PwIcon from "../../pw-icon";
import PwSpace from "../../pw-space";
import PwText from "../../pw-text";
import PwButton from "../../pw-button";
import IcDeleteicon from "../../../icons/IcDeletefile";
import IcCrossicon from "../../../icons/IcCrossicon";

const DeletemModal = (props) => {
  const { onClose } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <div>
      <PwIcon className="crossicon" ic={<IcCrossicon />} />
      <PwSpace value="30px" />
      <PwIcon className="icontop" ic={<IcDeleteicon />} />
      <PwSpace value="30px" />
      <PwText
        text="Are you sure you want to delete"
        appearance="heading_s_medi"
      />
      <PwText
        className="texttwod"
        text="the service ?"
        appearance="heading_s_medi"
      />
      <PwSpace value="40px" />
      <PwButton
        width="130px"
        marginLeft="80px"
        onClick={handleCancel}
        label="Delete"
        kind="secondary"
      />
      <PwSpace value="30px" />
    </div>
  );
};

export default DeletemModal;
