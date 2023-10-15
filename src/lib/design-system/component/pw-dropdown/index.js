import Dropdown from "react-bootstrap/Dropdown";
import "./pw-dropdown.css";
import IcPlus from "../../icons/IcPlus";
import PwIcon from "../pw-icon";

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import PwModal from "../pw-modal";
import PwText from "../pw-text";
import Radio from "../pw-radio";
import PwSpace from "../pw-space";

function ButtonDarkExample({ width }) {
  const itesms = css`
    width: ${width};
  `;
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <PwModal
        show={modalShow}
        render={() => (
          <div>
            <PwIcon ic={<IcPlus />} />
            <PwText text="This is some content inside a div." />
            <PwSpace value="30px" />
            <PwText text="Additional content can go here." />

            <button onClick={() => setModalShow(false)}>ok</button>
          </div>
        )}
      />
      {/*THis is  modal component */}
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
