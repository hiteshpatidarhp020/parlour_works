import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Radio from "./lib/design-system/component/pw-radio";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "./App.css";
import PwDropdown from "./lib/design-system/component/pw-dropdown";

import { Button } from "react-bootstrap";
import Practice from "./lib/design-system/component/practice";
import WpInput from "./lib/design-system/component/pw-input";
const root = ReactDOM.createRoot(document.getElementById("root"));
const items = ["Option 1", "Option 2", "Option 3"];
root.render(
  <React.StrictMode>
    <div style={{ background: "#242834", height: "100vh" }}>
      <Practice />
      <WpInput />
      <PwDropdown
        width="157px"
        kind=""
        dropItems={["vivo", "iphone", "laptop", "Hp"]}
      />
      <Radio labels={["Option 1", "Option 2", "Option 3"]} />
    </div>
  </React.StrictMode>
);
reportWebVitals();
