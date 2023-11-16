// InputTextField.js
import React, { useEffect, useState } from "react";

const InputTextField = ({
  type,
  label,
  value,
  state,
  maxLength,
  stateConfig,
  prefix,
  suffix,
  required,
  onChange,
  pattern,
  starIcon,
}) => {
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChangeInput = (e) => {
    const { value, maxLength } = e.target;
    const slicedValue = value.slice(0, maxLength);

    if (value && pattern) {
      if (value.match(pattern) !== null) {
        setInputValue(slicedValue);
        onChange(slicedValue);
      }
    } else {
      setInputValue(slicedValue);
      onChange(slicedValue);
    }
  };

  return (
    <div>
      <div>
        {prefix && <span>{prefix}</span>}
        <div>
          <input
            maxLength={maxLength}
            value={inputValue}
            onChange={handleChangeInput}
            // className={style.input_field}
            type="text"
            placeholder=" "
          />
          <span></span>
        </div>
        {suffix && <span>{suffix}</span>}
      </div>
      {state === "error" && <div>{stateConfig?.errorText}</div>}
    </div>
  );
};

export default InputTextField;
