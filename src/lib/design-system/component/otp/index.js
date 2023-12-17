import React, { useState, useEffect, useRef } from "react";
import style from "./otp.module.css";
import { useRouter } from "next/router";
import PwText from "../pw-text";
import "bootstrap/dist/css/bootstrap.min.css";
import PwSlider from "../pw-slider/slider";

const Otp = () => {
  const [timer, setTimer] = useState(10);
  const [showTimer, setShowTimer] = useState(true);
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    let interval;

    const decrementTimer = () => {
      setTimer((prevTimer) => prevTimer - 1);
    };

    if (showTimer) {
      interval = setInterval(decrementTimer, 1000);
    }

    if (timer === 0) {
      clearInterval(interval);
      setShowTimer(false);
    }

    return () => clearInterval(interval);
  }, [timer, showTimer]);

  const handleResendOtp = () => {
    setTimer(10);
    setShowTimer(true);

    inputRefs[0].current.focus();
  };

  const handleInput = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    setIsErrorVisible(false);

    if (value !== "" && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleInputChange = (index, e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      handleInput(index, value);
    }
  };

  const areAllInputsFilled = otpValues.every((value) => value !== "");

  const router = useRouter();
  const redirectToPage = () => {
    if (areAllInputsFilled) {
      router.push("https://www.jiocinema.com/");
    } else {
      setIsErrorVisible(true);
    }
  };

  return (
    <div className="mt-5">
      <div className={style.otpmain}>
        {[0, 1, 2, 3].map((index) => (
          <input
            className={`${style.otpinput} ${
              isErrorVisible ? style.errorinput : ""
            } `}
            key={index}
            type="text"
            maxLength={1}
            ref={inputRefs[index]}
            value={otpValues[index]}
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>
      {showTimer && <h4 style={{ color: "blue" }}>00:{timer}secs</h4>}
      {!showTimer && <button onClick={handleResendOtp}>Resend OTP</button>}
      {isErrorVisible && (
        <PwText
          className={style.errortext}
          appearance="body_m_regular"
          text="Please enter OTP"
          color="#dc3545"
        ></PwText>
      )}
      <button onClick={redirectToPage}>Next</button>
    </div>
  );
};

export default Otp;
