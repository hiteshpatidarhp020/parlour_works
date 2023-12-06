import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
// import "./sale.css";
import styles from "./sale-tabe.module.css";

const SaleTabe = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className={styles.pwslidercontainer}>
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="switch-tabs">
        <Tab className={styles.tabsitems} eventKey="tab1" title="Tab 1">
          <p>Content for Tab 1</p>
        </Tab>
        <Tab className={styles.tabsitems} eventKey="tab2" title="Tab 2">
          <p>Content for Tab 2</p>
        </Tab>
        <Tab className={styles.tabsitems} eventKey="tab3" title="Tab 3sdsf">
          <p>Content for Tab 3</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SaleTabe;