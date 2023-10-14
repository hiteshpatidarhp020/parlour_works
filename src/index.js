import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import PwButton from "./lib/design-system/component/pw-button";
import IcPlus from "./lib/design-system/icons/IcPlus";
import PwText from "./lib/design-system/component/pw-text";
import PwRadioButton from "./lib/design-system/component/pw-radio";
import Radio from "./lib/design-system/component/pw-radio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      {/* <PwButton 
      kind="primary" 
      prefix={<IcPlus />} 
      suffix={<IcPlus />}>
        New sale primary
      </PwButton> */}
      
      {/* <PwButton
        kind="primary"
        backgroundColor="red"
        color="white"
        suffix={<IcPlus />}
        prefix={<IcPlus />}
      >
        New sale primary
      </PwButton> */}

      {/* <PwButton 
      kind="secondary" 
      border={true}>Confirm
      </PwButton> */}

      {/* <PwButton 
      kind="tertiary">
        Tertiary Button
      </PwButton> */}

      <PwText 
      text="i am the best" 
      appearance="body_m_r" 
      color="primary200" />
      {/* <PwButton 
      kind="floating" 
      bottom="0" 
      prefix={<IcPlus />}>
        floating Button
      </PwButton> */}

      <Radio label="intrested"/>

      
    </div>
  </React.StrictMode>
);
reportWebVitals();
