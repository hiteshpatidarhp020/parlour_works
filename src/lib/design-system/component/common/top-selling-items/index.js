const { Container, Row, Col } = require("react-bootstrap");
import { css } from "@emotion/react";
import TopSellingCard from "./top-selling-card";
import PwDropdown from "../../pw-dropdown";
/** @jsxImportSource @emotion/react */

const topSellingSecton = css`
  border-radius: 10px;
  background: #242834;
  box-shadow: 0px 9px 16px 0px #16161c;
  margin-top: 23px;
  color: white;
  padding: 21px 24px 26px 24px;
`;
const items = [
  { name: "Haircut", qty: 10, price: 3500, type: "Female" },
  { name: "Haircut", qty: 10, price: 3500, type: "Female" },
  { name: "Haircut", qty: 10, price: 3500, type: "Female" },
  { name: "Haircut", qty: 10, price: 3500, type: "Female" },
  // Add more items as needed
];
const TopSellingItems = () => {
  return (
    <Container css={topSellingSecton}>
      <Row className="d-flex align-items-center ">
        <Col>
          <div>Top selling items</div>
        </Col>

        <Col>
          <div className="d-flex justify-content-end">
            <PwDropdown
              width="184px"
              marginBottom="0"
              dropItems={["Monthly", "iphone", "laptop", "Hp"]}
            />
          </div>
        </Col>
      </Row>

      <Container className="p-0 m-0">
        <Row>
          <Col>
            <TopSellingCard items={items} />
          </Col>
          <Col>
            <TopSellingCard items={items} secondary={true} />
          </Col>
          <Col>
            <TopSellingCard items={items} dropdown={false} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default TopSellingItems;
