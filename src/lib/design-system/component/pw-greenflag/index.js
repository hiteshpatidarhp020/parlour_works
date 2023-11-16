import "./pw-greenflag.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PwGreenflag = ({ OffersText = "Label",
color = "white",
width = "71px",
background = "#146d12",}) =>{
    
    const PracContainer = css`
        background-color: ${background};
        height: 15px;
         width: ${width};
        border-radius: 0 0 50px 50px;
        justify-content: center;
        display: flex;
        position: relative;
        border: transparent;
  `;
  const Green = css`
        height: 3px;
        width: 30px;
        background-color: white;
        position: absolute;
        bottom: -20px;
        left: -9px;
        transform: rotate(50deg);
  `;
  const blue = css`
    height: 3px;
    width: 30px;
    background-color: white;
    position: absolute;
    bottom: -20px;
    right: -9px;
    transform: rotate(-50deg);
  `;
  const TextModal = css`
    color: ${color};
    // color: white;
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    font-family: "DM Sans";
    font-style: normal;
  `;

    return(
        <>
        <div css={PracContainer}>
      <h1 css={Green}></h1>
      <h1 css={blue}></h1>
      <div css={TextModal}>{OffersText}</div>
    </div>
        </>
    )
};
export default PwGreenflag;