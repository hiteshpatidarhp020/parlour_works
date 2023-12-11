import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import styles from "./pw-slider.module.css";
import PwChart from "../pw-chart";

const PwSlider = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className={styles.pwslidercontainer}>
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        id="switch-tabs"
        className="mb-3"
      >
        <Tab eventKey="tab1" title="Tab 1">
          <p>Content forsad Tab 1</p>
        </Tab>
        <Tab eventKey="tab2" title="Tab 2">
          <p>Content for Tab 2</p>
        </Tab>
        <Tab eventKey="tab3" title="Tab 3">
          <p>Content for Tab 3 asdfa</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PwSlider;
