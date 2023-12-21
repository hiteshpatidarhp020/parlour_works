/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./link.module.css";
import PwIcon from "../pw-icon";
import IcLinkViewIcon from "../../icons/IcLinkViewIcon";
import PwText from "../pw-text";
// import "globels.scss";

const PwLink=({linkprop})=>{
    return(
        <>
        <div className={styles.linkbody}>
            <a href=""><PwText text={linkprop}/>
            </a>
            <div className={styles.linkicon}>
            <PwIcon  ic={<IcLinkViewIcon/>}/>
            </div>
        </div>
        </>
    )
}
export default PwLink;