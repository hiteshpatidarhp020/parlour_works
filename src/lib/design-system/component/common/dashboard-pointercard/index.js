import { Col, Row } from "react-bootstrap";
import styles from "./pointercard.module.css";
import PwText from "../../pw-text";
import PwIcon from "../../pw-icon";
import IcService from "../../../icons/IcService";
import IcDashCardOne from "../../../icons/IcDashCardone";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
const PwDashboardPoniterCard = ({
  background = "red",

  labelOne,
  labelTwo,
  colorcard,
}) => {
  const dashcart = css`
    background-color: ${background};
    border-radius: 10px;
    padding: 25px 20px 24px 24px;
    margin: 0;
  `;
  return (
    <div>
      <div css={dashcart} style={{ width: "100%" }}>
        <Row className={styles.maincontainer}>
          <Col xs={10} md={8}>
            <PwText
              color="#E5E8F2"
              className="textone"
              text={labelOne}
              appearance="body_s_regul"
            />
            <PwText
              color="white"
              className="textnext"
              text={labelTwo}
              appearance="heading_l_medium"
            />
          </Col>
          <Col xs={2} md={2}>
            <PwIcon className={styles.iconmain} ic={<IcDashCardOne />} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default PwDashboardPoniterCard;
