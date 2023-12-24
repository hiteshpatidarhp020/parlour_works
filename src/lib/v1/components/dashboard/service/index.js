import { Col, Row } from "react-bootstrap";
import styles from "../dashboard.module.css";
import Servicecard from "../../../../design-system/component/common/servicecard";
import PwButton from "../../../../design-system/component/pw-button";
import IcService from "../../../../design-system/icons/IcService";
import IcMyStaffIcon from "../../../../design-system/icons/IcMyStaffIcon";
import PwSearchBar from "../../../../design-system/component/pw-searchbar";
import { useState } from "react";
import ManageCategory from "../../../../design-system/component/common/manage-category";
import MPractice from "../../../../design-system/component/mpractice";
import ManageCategorieSection from "./manage-categories-section";

const services = [
  { id: 1, name: "Haircut", gender: "M", price: "200" },
  { id: 2, name: "maincure", gender: "M", price: "200" },
  // { id: 3, name: "Manicure", gender: "F", price: "450" },
  // { id: 4, name: "Shave", gender: "M", price: "200" },
];
const Service = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="">
      <Row className="mb-3 position-relative">
        <Col className="p-0 text-white">
          <div>Services</div>
        </Col>
        <Col className="p-0">
          <div className=" d-flex justify-content-end">
            <PwSearchBar />
          </div>
        </Col>
      </Row>
      <Row className={styles.rowService}>
        <Col md={4} className="mb-3 p-0 pe-3">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0 pe-3">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0  ">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0 pe-3 ">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0 pe-3 ">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0  ">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0 pe-3 ">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
        <Col md={4} className="mb-3 p-0 pe-3 ">
          <Servicecard
            services={services}
            labelHeading="Hair Spa"
            labelDiscription="Best Salon In The Area"
          />
        </Col>
      </Row>
      <PwButton
        kind="floating"
        bottom="30px"
        label="Manage category"
        prefix={<IcMyStaffIcon />}
        right="50px"
        onClick={openModal}
      />
      {isModalOpen && (
        <div className="openthis ">
          <div className={styles.manageCategories}>
            <ManageCategorieSection />
            <h1 className="text-white">Hitesh Patidar</h1>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Service;
