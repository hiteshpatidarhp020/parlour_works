import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Radio from "./lib/design-system/component/pw-radio";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ButtonDarkExample from "./lib/design-system/component/pw-dropdown";
import PwSlider from "./lib/design-system/component/pw-slider/slider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const items = ["Option 1", "Option 2", "Option 3"];
root.render(
  <React.StrictMode>
    <div>
      <ButtonDarkExample />
      <Radio labels={["Option 1", "Option 2", "Option 3"]} />
      <PwSlider labelright="Male" labelleft="Female"/>
    </div>
  </React.StrictMode>
);
reportWebVitals();
