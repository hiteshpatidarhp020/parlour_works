import React from "react";
import Form from "react-bootstrap/Form";

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
    </>
  );
};

export default Radio;
