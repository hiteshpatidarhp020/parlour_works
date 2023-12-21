/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./markcomp.module.css";
import { Col, Row } from "react-bootstrap";
import PwText from "../../../pw-text";
import PwIcon from "../../../pw-icon";
import IcService from "../../../../icons/IcService";
import IcMarkCheckIcon from "../../../../icons/IcMarkcheckicon";

const MarkCompleted = ({textmain,marktext,timetext})=>{
    return(
        <>
            <Row className={styles.markmain}>
                <Col className={styles.starttext} xs={6} md={6}>
                    <PwText text={textmain} appearance="body_m_regular"/>
                </Col>
                <Col className={styles.markbox} xs={6} md={6}>
                    <Col className={styles.timing} xs={3} md={3}>
                    <PwText text={timetext} appearance="body_m_r"/>
                    </Col>
                    <Col  className={styles.mark} xs={3} md={3}>
                    <div className={styles.checktext}>
                    <PwText text={marktext} appearance="body_m_r"/>
                    </div>
                    <PwIcon ic={<IcMarkCheckIcon/>}/>
                    </Col>
                </Col>
            </Row>
        </>
    )
}
export default MarkCompleted;