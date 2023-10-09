import React from "react";
import "./pw-button.css";
import PwIcon from "../pw-icon";

const PwButton = ({
  kind,
  className,
  prefix,
  width,
  suffix,
  children,
  top,
  bottom,
  left,
  right,
  backgroundColor,
  color,
  marginLeft,
  border = false,
  borderRadius = true,
}) => {
  const kinds = {
    primary: "primary-button",
    secondary: "secondary-button",
    tertiary: "tertiary-button",
    floating: "floating-button",
  };

  const buttonSection = `${kinds[kind] || ""} ${className || ""}`;

  const buttonStyle = {
    top,
    width,
    bottom,
    left,
    right,
    backgroundColor,
    color,
    border: border && kind === "secondary" ? "1px solid #CCAA6D" : "none",
    borderRadius: borderRadius && kind === "floating" ? "10px" : "none",
    padding: width === "100%" ? "10px  0" : "",
  };
  const btnstyles = {
    color,
    marginLeft: prefix ? "9px" : "0",
  };

  return (
    <div className={buttonSection} style={buttonStyle}>
      <PwIcon className="prefix" ic={prefix} />
      <button className="main-btn" style={btnstyles}>
        {children}
      </button>
      <PwIcon ic={suffix} />
    </div>
  );
};

export default PwButton;
