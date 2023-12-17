/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./link.module.css";
import PwIcon from "../pw-icon";
import IcAlert from "../../icons/IcAlert";
import IcLinkViewIcon from "../../icons/IcLinkViewIcon";
const PwLink=({linkprop})=>{
    return(
        <>
            <div className={styles.linktext}>
            <a href="">{linkprop}</a>
            <PwIcon ic={<IcLinkViewIcon/>}/>
            </div>
        </>
    )
}
export default PwLink;