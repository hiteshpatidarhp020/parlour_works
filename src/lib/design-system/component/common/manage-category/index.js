/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./manage-category.css";
import { Col, Image, Row } from "react-bootstrap";
import PwText from "../../pw-text";

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
      <div style={{ width: "40%" }} css={Servicebox} className="maincard">
        <Row>
          <div className="cardleft">
            <Col xs={4} md={3}>
              <Image src="../images/dashboard/hairspa.png" />
            </Col>
            <Col xs={4} md={3} className="coltext">
              <PwText
                css={Servicecart}
                text={labelHead}
                appearance="body_s_medium"
              />
              <PwText
                className="headertexttwo"
                css={Servicecart}
                text={labelDiscript}
                appearance="body_m_regular"
              />
            </Col>
          </div>
          <Col xs={4} md={3} className="cardicon">
            <Image src="../images/dashboard/icservice.svg" />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ManageCategory;
