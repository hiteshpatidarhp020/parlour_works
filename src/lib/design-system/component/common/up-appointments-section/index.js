import { Container } from "react-bootstrap";
import PwText from "../../pw-text";
import PwDropdown from "../../pw-dropdown";
import { css } from "@emotion/react";
/**@jsxImportSource @emotion/react */

const upAppoinMain = css`
  background: red;
  border-radius: 10px;
  background: #242834;
  box-shadow: 0px 9px 16px 0px #16161c;
  padding: 17px 36px 44px 29px;
`;
const userSectiom = css`
  border-radius: 10px;
  border: 2px solid #303645;
  background: #242834;
  padding: 14px 24px;
`;
const UpcomingAppointmentsSection = () => {
  return (
    <Container css={upAppoinMain}>
      <div className="d-flex align-items-center ">
        <PwText color="white" text="Upcoming appointments" />
        <div className=" justify-content-end">
          <PwDropdown
            width="157px"
            marginBottom="0"
            dropItems={["Monthly", "iphone", "laptop", "Hp"]}
          />
        </div>
      </div>
      <div className="d-flex align-items-center" css={userSectiom}>
        <PwText color="white" text="Saayan Das" />
        <div className="d-flex w-100 justify-content-end">
          <div className="d-flex">
            <PwText color="white" text="Saayan Das" />
            <PwText color="white" text="Saayan Das" />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default UpcomingAppointmentsSection;
