import { Col, Row } from "react-bootstrap";
import PwDashboardPoniterCard from "../../../../design-system/component/common/dashboard-pointercard";
import PwText from "../../../../design-system/component/pw-text";
import styles from "./home-dashboard.module.css";
import PwChart from "../../../../design-system/component/pw-chart";
import PwLineChart from "../../../../design-system/component/pw-chart/line-chart";
const HomDashboard = () => {
  return (
    <div>
      {/*This is Title section */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex ">
            <div className="me-5">
              <PwText text="Dashboard" color="white" />
            </div>
            <div>
              <PwText text="Tabs" color="white" />
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <PwText text="Monthly" color="white" />
          </div>
        </Col>
      </Row>
      {/*This is cards section */}
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
      <PwChart />
      <PwLineChart />
    </div>
  );
};
export default HomDashboard;
