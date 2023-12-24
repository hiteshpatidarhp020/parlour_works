/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styles from "./manage-category.module.css";
import { Col, Image, Row } from "react-bootstrap";
import PwText from "../../pw-text";
import PwSpace from "../../pw-space";
import PwDivider from "../../pw-divider";

const ManageCategory = ({
  labelHead,
  labelDiscript,
  marginBottom,
  marginRight,
}) => {
  const Servicecart = {
    label: labelHead,
    label: labelDiscript,
  };
  const Servicebox = {
    marginBottom: marginBottom,
    marginRight: marginRight,
  };
  return (
    <>
      <div css={Servicebox} className={styles.maincard}>
        <Row className="d-flex align-items-center p-0">
          <Col md={3} className={styles.cardleft}>
            <Image src="../images/dashboard/hairspa.png" />
          </Col>
          <Col md={7} className="coltext">
            <PwText
              css={Servicecart}
              text={labelHead}
              appearance="body_s_medium"
            />
            <PwSpace value="4px" />
            <PwText
              className="headertexttwo"
              css={Servicecart}
              text={labelDiscript}
              appearance="body_m_regular"
            />
          </Col>

          <Col md={2} className="cardicon">
            <Image src="../images/dashboard/icservice.svg" />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ManageCategory;
