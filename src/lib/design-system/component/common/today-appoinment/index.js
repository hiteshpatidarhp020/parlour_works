/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./todayapp.module.css";
import AppoinmentTc from "./appoinment-totalcount";
import MarkCompleted from "./mark-completed";
import PwLink from "../../pw-link";
import PwText from "../../pw-text";
import PwSpace from "../../pw-space";

const TodayAppoinment = ()=>{
    return(
        <>
        <div className={styles.todayappmain}>
        <div className={styles.toappheading}>
        <div className={styles.toappheadstart}>
        <PwText text="Today's Appoinment" appearance="body_m_med"/>
        <PwSpace value="21px"/>
        </div>
        <div className={styles.todaylink}>
        <PwLink linkprop="View Calender"/>
        </div>
        </div>
        <PwSpace value="7px"/>
        <div 
            className={styles.appoinmentmain}>
            <AppoinmentTc counter="08" 
            colorcounter="#FF9090" 
            countertext="on going" />

            <AppoinmentTc counter="04" 
            colorcounter="#96D9FF" 
            countertext="Attended" />
        
            <AppoinmentTc  counter="05" 
            colorcounter="#A073FF "
             countertext="Planned"/>
            
            <AppoinmentTc color="white" 
            counter="17" colorcounter="#CFFFB8"
            countertext="Total" />
        </div>
            <MarkCompleted textmain="Durgesh Patidar" 
            timetext="10.00am" marktext="Marked" />
            <PwSpace value="9px"/>
            <MarkCompleted textmain="Hitesh Patidar" 
            timetext="11.00am" marktext="Marked" />
            <PwSpace value="9px"/>
            <MarkCompleted textmain="Monika Patidar" 
            timetext="01.00pm" marktext="Marked" />
            <PwSpace value="36px"/>
        </div>
        </>
    )
}
export default TodayAppoinment;