/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Component } from "react";
import styles from "./pw-divider.module.css";

const PwDivider = ({ marginTop, marginBottom }) => {
  const Dividertopbottom = {
    marginTop: marginTop,
    marginBottom: marginBottom,
  };
  return (
    <>
      <div css={Dividertopbottom} className={styles.border}></div>
    </>
  );
};
export default PwDivider;
