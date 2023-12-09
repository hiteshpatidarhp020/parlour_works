import React from "react";
// import "./alert-model.css"
import PwIcon from "../../pw-icon";
import PwSpace from "../../pw-space";
import PwText from "../../pw-text";
import PwButton from "../../pw-button";
import IcAlert from "../../../icons/IcAlert";
import IcCrossicon from "../../../icons/IcCrossicon";

const AlertmModal = (props) => {
  const { onClose } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      <div>
        <PwIcon className="crossicon" ic={<IcCrossicon />} />
        <PwSpace value="30px" />
        <PwIcon className="icontopalert" ic={<IcAlert />} />
        <PwSpace value="30px" />
        <PwText text="The changes you made will" appearance="heading_s_medi" />
        <PwText
          className="texttwoalert"
          text="be discarded"
          appearance="heading_s_medi"
        />
        <PwSpace value="40px" />
        <PwButton
          width="130px"
          marginLeft="60px"
          onClick={handleCancel}
          label="Confirm"
          kind="secondary"
        />
        <PwSpace value="30px" />
      </div>
      {/* <PwSpace value="100px" /> */}
    </>
  );
};

export default AlertmModal;
