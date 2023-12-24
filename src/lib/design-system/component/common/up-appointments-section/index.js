import { Col, Container, Row } from "react-bootstrap";
import PwText from "../../pw-text";
import PwDropdown from "../../pw-dropdown";
import { css } from "@emotion/react";
/**@jsxImportSource @emotion/react */

const upAppoinMain = css`
  background: red;
  border-radius: 10px;
  background: #242834;
  box-shadow: 0px 9px 16px 0px #16161c;
  padding: 17px 36px 15px 29px;
`;
const userSectiom = css`
  border-radius: 10px;
  border: 2px solid #303645;
  background: #242834;
  padding: 14px 24px;
`;
const circle = css`
  border: 1px solid white;
  height: 5px;
  width: 9px;
  border-radius: 50%;
  margin: 0 10px;
  margin-top: 3px;
`;
const UpcomingAppointmentsSection = () => {
  return (
    <Container className="mt-4" css={upAppoinMain}>
      <div className="d-flex mb-3 align-items-center ">
        <PwText color="white" text="Upcoming appointments" />
        <div className=" justify-content-end">
          <PwDropdown
            width="157px"
            marginBottom="0"
            dropItems={["Monthly", "iphone", "laptop", "Hp"]}
          />
        </div>
      </div>

      <Row className="d-flex m-0  mb-2 align-items-center" css={userSectiom}>
        <Col className="p-0">
          <PwText color="white" text="Saayan Das" />
        </Col>
        <Col className="d-flex p-0 w-100 justify-content-end">
          <div className="d-flex align-items-center">
            <PwText color="white" text="Tomorrow " />
            <div css={circle}></div>
            <PwText color="white" text="10:00 AM" />
          </div>
        </Col>
      </Row>
      <Row className="d-flex m-0  mb-2 align-items-center" css={userSectiom}>
        <Col className="p-0">
          <PwText color="white" text="Saayan Das" />
        </Col>
        <Col className="d-flex p-0 w-100 justify-content-end">
          <div className="d-flex align-items-center">
            <PwText color="white" text="Tomorrow " />
            <div css={circle}></div>
            <PwText color="white" text="10:00 AM" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className="d-flex justify-content-end">
          <div className="text-white">View more </div>
        </Col>
      </Row>
    </Container>
  );
};
export default UpcomingAppointmentsSection;
