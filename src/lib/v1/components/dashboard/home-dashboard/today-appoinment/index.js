/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./todayapp.module.css";
import AppoinmentTc from "../../../../../design-system/component/common/appoinment-totalcount";
import MarkCompleted from "../../../../../design-system/component/common/mark-completed";
import PwLink from "../../../../../design-system/component/pw-link";

const TodayAppoinment = ()=>{
    return(
        <>
        <PwLink linkprop="View Calender"/>
        <AppoinmentTc/>
        <MarkCompleted/>
        </>
    )
}
export default TodayAppoinment;