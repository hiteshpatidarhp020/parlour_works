import Dropdown from "react-bootstrap/Dropdown";
import "./pw-dropdown.css";
import IcPlus from "../../icons/IcPlus";
import PwIcon from "../pw-icon";

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ButtonDarkExample({ width }) {
  const itesms = css`
    width: ${width};
  `;
  return (
    <>
      <h1 css={itesms}>sdfdasg</h1>
      <Dropdown css={itesms} data-bs-theme="dark" className="dropmain">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Button
          <PwIcon className="rotate-icon " ic={<IcPlus />} />
        </Dropdown.Toggle>
        <div css={itesms}>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Ano </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Some </Dropdown.Item>
            <Dropdown.Item href="#/action-4">Sepa </Dropdown.Item>
          </Dropdown.Menu>
        </div>
      </Dropdown>
    </>
  );
}

export default ButtonDarkExample;
