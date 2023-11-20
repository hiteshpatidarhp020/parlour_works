import React, { useState } from "react";
import "./pw-input.css";
import PwText from "../pw-text";

const WpInput = ({
  type,
  maxLength,
  value,
  label,
  stateConfig,
  error,
  validate,
}) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    if (type === "number") {
      inputValue = inputValue.replace(/\D/g, "");
    }

    if (inputValue.length <= maxLength || maxLength === undefined) {
      if (stateConfig) {
        stateConfig(inputValue);
      }
    }
  };
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const labelStyle = {
    top: isInputFocused || value ? "-15px" : "0px",
    position: "absolute",
    transition: "top 0.3s ease",
    fontSize: isInputFocused || value ? "12px" : "16px",
    fontFamily: " DM Sans",
    fontWeight: "400",
    color:
      isInputFocused || value
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(255, 255, 255, 0.5)",
  };

  return (
    <div
      className={` position-relative inputmain  ${error ? "errorborder" : ""}`}
    >
      <label style={labelStyle}>{label}</label>

      <input
        maxLength={maxLength}
        className="inputfiled"
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder=" "
        type={type}
      />

      <PwText
        className="text-danger droperrortext"
        appearance="body_s_regul"
        text={error}
      />
    </div>
  );
};

export default WpInput;

{
  /*import React, { useState } from "react";

const WpInput = ({ email }) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const labelStyle = {
    top: isInputFocused || email ? "20px" : "inherit",
    position: "absolute",
  };

  return (
    <div className=" ms-4">
      <label style={labelStyle}>Label Text</label>
      <input
        value={email}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <div></div>
    </div>
  );
};

export default WpInput;

*/
}
