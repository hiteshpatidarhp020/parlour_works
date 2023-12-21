/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./appoinment.module.css";
import PwText from "../../../pw-text";
import PwSpace from "../../../pw-space";
const AppoinmentTc  = ({counter,countertext,colorcounter})=>{
    return(
        <>
        <div className={styles.countermain}>
            <PwText color="#FFFFFF" text={counter} appearance="heading_l_medium"/>
            <PwSpace value="10px"/>
            <PwText color={colorcounter} text={countertext} appearance="body_m_regular"/>
        </div>
        </>
    )
}
export default AppoinmentTc;