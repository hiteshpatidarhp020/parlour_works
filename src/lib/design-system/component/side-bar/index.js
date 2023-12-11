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
import PwIcon from "../pw-icon";
import IcDashboardIcon from "../../icons/IcDashboardIcon";
import IcServiceIcon from "../../icons/IcServiceIcon";
import IcReportsIcon from "../../icons/IcReportsIcon";
import IcMyStaffIcon from "../../icons/IcMyStaffIcon";
import IcPaymentIcon from "../../icons/IcPaymenticon";
import IcMyStoreIcon from "../../icons/IcMyStoreIcon";
import IcAppDetailsIcon from "../../icons/IcAppDetailIcon";
import IcCampaignIcon from "../../icons/IcCampaignIcon";
import IcSettingIcon from "../../icons/IcSettingIcon";
import IcParlourLogo from "../../icons/IcParlourLogo";

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
            <div className={`${styles.tab} mt-3 mb-5`}>
              <PwIcon ic={<IcParlourLogo/>}/>
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "tab1" && styles.active
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcDashboardIcon/>}/>
                <PwText className="ms-3 mt-1" text="Deshboard" appearance="body_m_regular" />
              </div>

              
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "tab2" && styles.active
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcReportsIcon/>}/>
                <PwText className="ms-3 mt-1" text="Reports" appearance="body_m_regular" />
              </div>
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "tab3" && styles.active
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcServiceIcon/>}/>
                <PwText className="ms-3 mt-1" text="Service" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab4" && styles.active
              }`}
              onClick={() => handleTabClick("tab4")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcPaymentIcon/>}/>
                <PwText className="ms-3 mt-1" text="Payment Modes" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab5" && styles.active
              }`}
              onClick={() => handleTabClick("tab5")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcMyStaffIcon/>}/>
                <PwText className="ms-3 mt-1" text="MyStaff" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab6" && styles.active
              }`}
              onClick={() => handleTabClick("tab6")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcMyStoreIcon/>}/>
                <PwText className="ms-3 mt-1" text="MyStores" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab7" && styles.active
              }`}
              onClick={() => handleTabClick("tab7")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcSettingIcon/>}/>
                <PwText className="ms-3 mt-1" text="Settings" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab8" && styles.active
              }`}
              onClick={() => handleTabClick("tab8")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcMyStaffIcon/>}/>
                <PwText className="ms-3 mt-1" text="Referrals" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab9" && styles.active
              }`}
              onClick={() => handleTabClick("tab9")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcAppDetailsIcon/>}/>
                <PwText className="ms-3 mt-1" text="App Details" appearance="body_m_regular" />
              </div>
            </div>

            <div
              className={`${styles.tab} ${
                activeTab === "tab10" && styles.active
              }`}
              onClick={() => handleTabClick("tab10")}
            >
              <div className="d-flex ">
                <PwIcon ic={<IcCampaignIcon/>}/>
                <PwText className="ms-3 mt-1" text="Campaigns" appearance="body_m_regular" />
              </div>
            </div>
          </div>
        </Col>

        <Col md={10} className={`${styles.tabContent} `}>
          <div>
            {activeTab === "tab1" && <HomDashboard />}
            {activeTab === "tab2" && <Reports />}
            {activeTab === "tab3" && <Service />}
            {/* {activeTab === "tab4" && <PaymentModes />} */}
            {/* {activeTab === "tab5" && <MyStaff />}
            {activeTab === "tab6" && <MyStores />}
            {activeTab === "tab7" && <Settings />}
            {activeTab === "tab8" && <Referrals />}
            {activeTab === "tab9" && <AppDetails />}
            {activeTab === "tab10" && <Campaigns />} */}
           
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;
