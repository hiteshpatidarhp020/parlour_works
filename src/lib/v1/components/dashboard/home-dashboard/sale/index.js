import { Col, Container, Row } from "react-bootstrap";
import PwDashboardPoniterCard from "../../../../../design-system/component/common/dashboard-pointercard";
import PwChart from "../../../../../design-system/component/pw-chart";
import PwLineChart from "../../../../../design-system/component/pw-chart/line-chart";
import PwSpace from "../../../../../design-system/component/pw-space";
import UpcomingAppointmentsSection from "../../../../../design-system/component/common/up-appointments-section";
import TodayAppoinment from "../../../../../design-system/component/common/today-appoinment";
import IcDashCardOne from "../../../../../design-system/icons/IcDashCardone";
import IcDashCardTwo from "../../../../../design-system/icons/IcDashcardTwo";

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
              dashicon={<IcDashCardOne/>}
            />
          </div>
        </Col>
        <Col className="p-0 pe-3">
          <div>
            <PwDashboardPoniterCard
              background=" #53AFAF"
              labelOne="Numbers Of bills"
              labelTwo="175"
              colors="red"
              dashicon={<IcDashCardTwo/>}
            />
          </div>
        </Col>
        <Col className="p-0 pe-3">
          <div>
            <PwDashboardPoniterCard
              labelOne="Average bill value"
              labelTwo="1000"
              background=" #A57329"
              dashicon={<IcDashCardTwo/>}
            />
          </div>
        </Col>
        <Col className="p-0">
          <div>
            <PwDashboardPoniterCard
              background=" #236FC1"
              labelOne="Total expenses"
              labelTwo="1000"
              colors="red"
              dashicon={<IcDashCardTwo/>}
            />
          </div>
        </Col>
      </Row>
      <Container className="p-0 m-0">
        <UpcomingAppointmentsSection />
        <TodayAppoinment/>

      
      </Container>
      <PwChart />
      <PwLineChart />
      <PwSpace value="90px" />
    </div>
  );
};
export default Sale;
