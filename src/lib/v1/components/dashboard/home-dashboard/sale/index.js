import { Col, Container, Row } from "react-bootstrap";
import PwDashboardPoniterCard from "../../../../../design-system/component/common/dashboard-pointercard";
import PwChart from "../../../../../design-system/component/pw-chart";
import PwLineChart from "../../../../../design-system/component/pw-chart/line-chart";
import PwSpace from "../../../../../design-system/component/pw-space";
import UpcomingAppointmentsSection from "../../../../../design-system/component/common/up-appointments-section";

const Sale = () => {
  return (
    <div>
      <Row className="p-0 m-0">
        <Col className="p-0 pe-3">
          <div>
            <PwDashboardPoniterCard
              labelOne="Total Business"
              labelTwo="17500"
              background=" #509CEF"
            />
          </div>
        </Col>
        <Col className="p-0 pe-3">
          <div>
            <PwDashboardPoniterCard
              background=" #53AFAF"
              labelOne="Total Business"
              labelTwo="17500"
              colors="red"
            />
          </div>
        </Col>
        <Col className="p-0 pe-3">
          <div>
            <PwDashboardPoniterCard
              labelOne="Total Business"
              labelTwo="17500"
              background=" #A57329"
            />
          </div>
        </Col>
        <Col className="p-0">
          <div>
            <PwDashboardPoniterCard
              background=" #236FC1"
              labelOne="Total Business"
              labelTwo="17500"
              colors="red"
            />
          </div>
        </Col>
      </Row>
      <Container className="p-0 m-0">
        <UpcomingAppointmentsSection />
      </Container>
      <PwChart />
      <PwLineChart />
      <PwSpace value="90px" />
    </div>
  );
};
export default Sale;
