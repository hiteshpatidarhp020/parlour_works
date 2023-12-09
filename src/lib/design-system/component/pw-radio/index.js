import React from "react";
import "./pw-radio.css";

const Radio = ({ labels}) => {
    if (!labels || !Array.isArray(labels)) {
        return;
    } 
  return (
    <>
    <div>
      {labels.map((label) => (
        <div style={{ color: "" }} key={labels.label}>
      <label class="container">{label.name1}
      <input type="radio" name="radio" />
      <span class="checkmark"></span>
      </label>
      
    
      </div>
      ))}
      </div>
      
    </>
  );
  };

export default Radio;
