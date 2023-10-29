import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Radio from "./lib/design-system/component/pw-radio";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ButtonDarkExample from "./lib/design-system/component/pw-dropdown";
import PwSlider from "./lib/design-system/component/pw-slider/slider";
import PwForgetpass from "./lib/design-system/component/pw-forgetpass";
import PwSearchBar from "./lib/design-system/component/pw-searchbar";
import PwText from "./lib/design-system/component/pw-text";
import PwOptionSlider from "./lib/design-system/component/pw-optionslider";
import PwDivider from "./lib/design-system/component/pw-divider";
import PwKBLogo from "./lib/design-system/component/pw-kblogo";
import PwGreenflag from "./lib/design-system/component/pw-greenflag";

import "./App.css";
import PwDropdown from "./lib/design-system/component/pw-dropdown";

import { Button } from "react-bootstrap";
import Practice from "./lib/design-system/component/practice";
import WpInput from "./lib/design-system/component/pw-input";
const root = ReactDOM.createRoot(document.getElementById("root"));
const items = ["Option 1", "Option 2", "Option 3"];
root.render(
  <React.StrictMode>
    <div>
      <ButtonDarkExample />
      {/* <Radio labels={["Option 1", "Option 2", "Option 3"]} /> */}
      <PwSlider labelright="Male" labelleft="Female"/>
      <PwForgetpass />
      {/* <PwSearchBar/> */}
      <PwOptionSlider/>
      {/* <PwDivider marginTop="100px" marginBottom="30px"/> */}
      {/* <PwKBLogo  /> */}
      <PwGreenflag/>
    </div>
  </React.StrictMode>
);
reportWebVitals();
