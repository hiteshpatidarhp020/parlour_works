import { Col, Row } from "react-bootstrap";
import PwDashboardPoniterCard from "../../../../design-system/component/common/dashboard-pointercard";
import PwText from "../../../../design-system/component/pw-text";
import styles from "./home-dashboard.module.css";
import PwChart from "../../../../design-system/component/pw-chart";
import PwLineChart from "../../../../design-system/component/pw-chart/line-chart";
import PwSlider from "../../../../design-system/component/pw-slider/slider";
import PwSpace from "../../../../design-system/component/pw-space";
import PwDropdown from "../../../../design-system/component/pw-dropdown";
const HomDashboard = () => {
  return (
    <div className="position-relative ">
      {/*This is Title section */}
      <Row className={styles.titleSection}>
        <Col>
          <div className="d-flex  ">
            <div className="me-5">
              <PwText text="Dashboard" color="white" />
            </div>
            <div className={styles.tabSection}>
              <PwSlider />
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <PwDropdown
              kind="secondary"
              width="157px"
              marginBottom="0"
              dropItems={["Monthly", "iphone", "laptop", "Hp"]}
            />
          </div>
        </Col>
      </Row>

      {/*This is cards section */}
      {/*<Row className="p-0 m-0">
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
  <PwLineChart />*/}
    </div>
  );
};
export default HomDashboard;
