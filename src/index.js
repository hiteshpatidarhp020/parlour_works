import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import Practice from "./lib/design-system/component/practice";
import MPractice from "./lib/design-system/component/mpractice";
import Sidebar from "./lib/design-system/component/side-bar";
import Header from "./lib/design-system/component/dashboard-header";
import PhoneHeader from "./lib/design-system/component/phone-header";
import PhoneFooter from "./lib/design-system/component/phone-footer";
import styles from "../src/lib/v1/components/dashboard/dashboard.module.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../globels.scss";
root.render(
  <React.StrictMode>
    <div>
      {/*<Practice />*/}
      {/* <MPractice /> */}
      <div>
      <div>
        {/* <Practice /> */}
        <Sidebar />
        <div className={styles.sidebarnone}>
          <Header />
        </div>
        <div className={styles.header}>
          <PhoneHeader />
          <PhoneFooter />
        </div>
      </div>
    </div>
    </div>
  </React.StrictMode>
);
reportWebVitals();
