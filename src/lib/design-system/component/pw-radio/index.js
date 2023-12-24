import React from "react";
import styles from "./pw-radio.module.css";

const Radio = ({ labels}) => {
    if (!labels || !Array.isArray(labels)) {
        return;
    } 
  return (
    <>
    <div>
      {labels.map((label) => (
        <div style={{ color: "" }} key={labels.label}>
      <label className={styles.container}>{label.name1}
      <input type="radio" name="radio" />
      <span className={styles.checkmark}></span>
      </label>
      
    
      </div>
      ))}
      </div>
      
    </>
  );
  };

export default Radio;
