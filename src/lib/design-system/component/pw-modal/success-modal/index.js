import React from "react";
import PwButton from "../../pw-button";
import style from "./success-modal.module.css";
import PwSpace from "../../pw-space";
import PwText from "../../pw-text";
import PwIcon from "../../pw-icon";
import IcSuccess from "../../../icons/IcSuccess";
import IcCrossicon from "../../../icons/IcCrossicon";

const SuccessModal = (props) => {
  const { onClose } = props;

  const handleCancel = () => {
    onClose();
  };
  return (
    <div className="successmodel">
      <PwIcon className="crossicon" ic={<IcCrossicon />} />
      <PwSpace value="30px" />
      <PwIcon className="icon" ic={<IcSuccess />} />
      <PwSpace value="30px" />
      <PwText text="The service is updated" appearance="heading_s_medi" />
      <PwText
        className="texttwo"
        text="successfully"
        appearance="heading_s_medi"
      />
      <PwSpace value="40px" />
      <PwButton
        width="110px"
        marginLeft="50px"
        onClick={handleCancel}
        label="Done"
        kind="secondary"
      />
      <PwSpace value="30px" />
    </div>
  );
};

export default SuccessModal;
