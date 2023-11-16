// import Dropdown from "react-bootstrap/Dropdown";
// import "./pw-dropdown.css";
// import IcPlus from "../../icons/IcPlus";
// import PwIcon from "../pw-icon";

// /**@jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
// import { useState } from "react";
// import PwText from "../pw-text";
// import IcVectordropdown from "../../icons/IcVecterdrop";

// const PwDropdown = ({ width }) => {
//   const [selectedItem, setSelectedItem] = useState("Select");

//   const handleDropdownSelect = (eventKey, event) => {
//     setSelectedItem(eventKey);
//   };

//   const itesms = css`
//     width: ${width};
//     background: "red";
//   `;

//   return (
//     <>
//       <Dropdown
//         css={itesms}
//         data-bs-theme="dark"
//         className="dropmain"
//         onSelect={handleDropdownSelect}
//       >
//         <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
//           <PwText text={selectedItem} appearance="body_m_regular" />
//           <PwIcon className="rotate-icon " ic={<IcVectordropdown />} />
//         </Dropdown.Toggle>
//         <div css={itesms}>
//           <Dropdown.Menu>
//             <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
//             <Dropdown.Item eventKey="Ano">Ano</Dropdown.Item>
//             <Dropdown.Item eventKey="Some">Some</Dropdown.Item>
//             <Dropdown.Item eventKey="Sepa">Sepa</Dropdown.Item>
//           </Dropdown.Menu>
//         </div>
//       </Dropdown>
//     </>
//   );
// };

// export default PwDropdown;

import Dropdown from "react-bootstrap/Dropdown";
import "./pw-dropdown.css";
import PwIcon from "../pw-icon";

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import PwText from "../pw-text";
import IcVectordropdown from "../../icons/IcVecterdrop";

const PwDropdown = ({ width, state, stateConfig, kind, dropItems }) => {
  const [selectedItem, setSelectedItem] = useState("Select");

  const handleDropdownSelect = (eventKey, event) => {
    setSelectedItem(eventKey);
    stateConfig(false);
  };

  let customStyles = {};

  if (kind === "secondary") {
    customStyles = {
      "--custom-background-color": "none",
      "--custom-border-bottom": "1px solid  #343948",
      "--custom-border-radius": "none",
      "--custom-bolor-color":
        state && selectedItem === "Select" ? "#bb321f" : "",
    };
  }

  const dropMain = css`
    width: ${width};
  `;

  return (
    <div className="dropsection">
      <Dropdown
        css={dropMain}
        data-bs-theme="dark"
        className="dropmain"
        onSelect={handleDropdownSelect}
      >
        <Dropdown.Toggle
          id="dropdown-button-dark-example1"
          variant="secondary"
          style={{
            ...customStyles,
          }}
          className="custom-dropdown"
        >
          <PwText text={selectedItem} appearance="body_m_regular" />
          <PwIcon className="rotate-icon " ic={<IcVectordropdown />} />
        </Dropdown.Toggle>
        <div css={{ width }} className="custom-dropdown-toggle">
          <Dropdown.Menu>
            {dropItems.map((item, index) => (
              <Dropdown.Item key={index} eventKey={item}>
                <PwText
                  text={item}
                  appearance="body_m_medium"
                  lineHeight="37px"
                />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>
      </Dropdown>
      {state && selectedItem === "Select" && (
        <div className="text-danger droperrortext">{state}</div>
      )}
    </div>
  );
};

export default PwDropdown;