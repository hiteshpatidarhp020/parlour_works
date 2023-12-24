import { Col, Container, Row } from "react-bootstrap";
import PwDashboardPoniterCard from "../../../../../design-system/component/common/dashboard-pointercard";
import PwChart from "../../../../../design-system/component/pw-chart";
import PwLineChart from "../../../../../design-system/component/pw-chart/line-chart";
import PwSpace from "../../../../../design-system/component/pw-space";
import UpcomingAppointmentsSection from "../../../../../design-system/component/common/up-appointments-section";
import TopSellingItems from "../../../../../design-system/component/common/top-selling-items";
import MaximumBusiness from "../../../../../design-system/component/common/maximum-business";
import IcService from "../../../../../design-system/icons/IcService";
import StaffTarget from "../../../../../design-system/component/common/staff-target";
import InvoiceTable from "../../../../../design-system/component/common/table";

const Staff = () => {
  const artistsData = [
    {
      name: "Kajal Basantani",
      amount: 3500,
      showDropdown: true,
      rank: 1,
      ic: <IcService />,
    },
    {
      name: "Saayan Das",
      amount: 3500,
      showDropdown: false,
      rank: 2,
      ic: <IcService />,
    },
    {
      name: "Saayan Das",
      amount: 3500,
      showDropdown: false,
      rank: 2,
      ic: <IcService />,
    },

    // Add more
  ];

  return (
    <div>
      <Row className="p-0 m-0">
        <Col className="p-0">
          <div>
            <PwDashboardPoniterCard
              width="257px"
              background=" #236FC1"
              labelOne="Total Business"
              labelTwo="17500"
              colors="red"
            />
          </div>
        </Col>
      </Row>
      <Container className="p-0 m-0 mt-4">
        <Row>
          <Col>
            <MaximumBusiness artists={artistsData} />
          </Col>
          <Col>
            <MaximumBusiness title="Maximum commission by artist" />
          </Col>
        </Row>
        <StaffTarget />
        <InvoiceTable />
      </Container>
      <PwLineChart />
      <TopSellingItems />
      <PwSpace value="90px" />
    </div>
  );
};
export default Staff;
