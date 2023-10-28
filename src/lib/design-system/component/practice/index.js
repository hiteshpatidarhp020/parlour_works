import { useState } from "react";
import PwIcon from "../pw-icon";
import IcPlus from "../../icons/IcPlus";
import PwModal from "../pw-modal";
import { Button } from "react-bootstrap";
import PwText from "../pw-text";
import PwSpace from "../pw-space";
import PwButton from "../pw-button";

const Practice = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
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
            <PwButton
              onClick={() => setModalShow(false)}
              label="Delete"
              kind="secondary"
            />
            <div>
              <button onClick={() => setModalShow(false)}>ok</button>
            </div>
          </div>
        )}
      />
    </div>
  );
};
export default Practice;
