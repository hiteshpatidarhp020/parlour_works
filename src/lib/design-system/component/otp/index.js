import React, { useState, useEffect, useRef } from "react";
import "./otp.css";
import { useRouter } from "next/router";

const Otp = () => {
  const [timer, setTimer] = useState(10);
  const [showTimer, setShowTimer] = useState(true);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
  const router = useRouter();
  const redirectToPage = () => {
    router.push("/target-page");
  };
  return (
    <div>
      <button onClick={redirectToPage}>Go to Target Page</button>
      <div className="otpmain">
        {[0, 1, 2, 3].map((index) => (
          <input
            className="otpinput"
            key={index}
            type="text"
            maxLength={1}
            ref={inputRefs[index]}
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>
      {showTimer && <h4 style={{ color: "white" }}>00:{timer}secs</h4>}
      {!showTimer && <button onClick={handleResendOtp}>Resend OTP</button>}
    </div>
  );
};

export default Otp;
