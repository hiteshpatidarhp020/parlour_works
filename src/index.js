import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Practice from "./lib/design-system/component/practice";
import MPractice from "./lib/design-system/component/mpractice";
const root = ReactDOM.createRoot(document.getElementById("root"));
import "bootstrap/dist/css/bootstrap.min.css";
import "../globels.scss";
root.render(
  <React.StrictMode>
    <div>
      {/*<Practice />*/}
      {/* <MPractice /> */}
    </div>
  </React.StrictMode>
);
reportWebVitals();
