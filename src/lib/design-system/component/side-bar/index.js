import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./side-bar.module.css";
import PwButton from "../pw-button";
import PwText from "../pw-text";
import Practice from "../practice";
import CollapsibleExample from "../dashboard-header";

import HomDashboard from "../../../v1/components/dashboard/home-dashboard";
import Reports from "../../../v1/components/dashboard/reports";
import Service from "../../../v1/components/dashboard/service";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabcontainer}>
      <Row className={`${styles.mainsection} m-0`}>
        <Col md={2} className={styles.tabBar}>
          <div className={styles.tabcontent}>
            <div className={`${styles.tab} mt-3 mb-5`}>logo parlour</div>
            <div
              className={`${styles.tab} ${
                activeTab === "tab1" && styles.active
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              <div className="d-flex ">
                <h6>i</h6>
                <PwText className="ms-3" text="Deshboard" appearance="" />
              </div>
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "tab2" && styles.active
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              Tab 2
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "tab3" && styles.active
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              Tab 3
            </div>
          </div>
        </Col>

        <Col md={10} className={`${styles.tabContent} `}>
          <div>
            {activeTab === "tab1" && <HomDashboard />}
            {activeTab === "tab2" && <Reports />}
            {activeTab === "tab3" && <Service />}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
