import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { Button } from "react-bootstrap";
import Practice from "./lib/design-system/component/practice";
import WpInput from "./lib/design-system/component/pw-input";
import PwSpace from "./lib/design-system/component/pw-space";
const root = ReactDOM.createRoot(document.getElementById("root"));
const items = ["Option 1", "Option 2", "Option 3"];
root.render(
  <React.StrictMode>
    <div style={{ background: "#191921", height: "100vh" }}>
      <Practice />
      <PwSpace value="90px" />
      <Radio labels={["Option 1", "Option 2", "Option 3"]} />
    </div>
  </React.StrictMode>
);
reportWebVitals();
