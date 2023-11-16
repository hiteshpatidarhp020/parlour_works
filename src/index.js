import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import Practice from "./lib/design-system/component/practice";
import MPractice from "./lib/design-system/component/mpractice";
const root = ReactDOM.createRoot(document.getElementById("root"));
const items = ["Option 1", "Option 2", "Option 3"];
root.render(
  <React.StrictMode>
    <div>
      <Practice/>
      {/* <MPractice/> */}
    </div>
  </React.StrictMode>
);
reportWebVitals();
