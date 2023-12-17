import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import styles from "./pw-slider.module.css";
import Sale from "../../../v1/components/dashboard/home-dashboard/sale";

const PwSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="">
      <div className={styles.customTabContainer}>
        <Nav className={styles.tabList}>
          <Nav.Item
            className={`${styles.tabItem} ${
              activeTab === 0 ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => handleTabClick(0)}
          >
            Sale
          </Nav.Item>
          <Nav.Item
            className={`${styles.tabItem} ${
              activeTab === 1 ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => handleTabClick(1)}
          >
            Staff
          </Nav.Item>
          <Nav.Item
            className={`${styles.tabItem} ${
              activeTab === 2 ? styles.activeTab : styles.inactiveTab
            }`}
            onClick={() => handleTabClick(2)}
          >
            Customer
          </Nav.Item>
        </Nav>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 0 && (
          <div>
            <Sale />
          </div>
        )}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default PwSlider;
