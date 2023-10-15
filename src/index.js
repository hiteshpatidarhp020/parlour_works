import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import PwButton from "./lib/design-system/component/pw-button";
import IcPlus from "./lib/design-system/icons/IcPlus";
import ButtonDarkExample from "./lib/design-system/component/pw-dropdown";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <ButtonDarkExample width="100px" />
      {/*<PwButton kind="primary" prefix={<IcPlus />} suffix={<IcPlus />}>
        New sale primary
      </PwButton>
      <PwButton
        kind="primary"
        backgroundColor="red"
        color="white"
        suffix={<IcPlus />}
        prefix={<IcPlus />}
      >
        New sale primary
      </PwButton>

      <PwButton kind="secondary">Confirm</PwButton>
      <PwButton kind="tertiary">Tertiary Button</PwButton>
      <PwButton kind="floating" prefix={<IcPlus />}>
        floating Button
</PwButton>*/}
    </div>
  </React.StrictMode>
);
reportWebVitals();
