import { Col, Row } from "react-bootstrap";
import PwDashboardPoniterCard from "../../../../design-system/component/common/dashboard-pointercard";

const HomDashboard = () => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <PwDashboardPoniterCard
              labelOne="Total Business"
              labelTwo="17500"
              colors="red"
            />
          </div>
        </Col>
        <Col>
          <div>
            <PwDashboardPoniterCard
              labelOne="Total Business"
              labelTwo="17500"
              colors="red"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HomDashboard;
