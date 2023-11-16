import React from "react";
import Form from "react-bootstrap/Form";
import "../pw-radio/pw-radio.css";

const Radio = ({ labels, name }) => {
  return (
    <>
      {labels.map((label, index) => (
        <Form.Check
          inline
          label={label}
          name="1"
          type="radio"
          id={`radio-${name}-${index}`}
          key={`radio-${name}-${index}`}
        />
      ))}
      <Form.Check type="radio" aria-label="radio 1" />
    </>
  );
};

export default Radio;
