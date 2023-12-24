import { Col, Row } from "react-bootstrap";
import ManageCategory from "../../../../../design-system/component/common/manage-category";
import PwButton from "../../../../../design-system/component/pw-button";
import styles from "../../dashboard.module.css";
import PwText from "../../../../../design-system/component/pw-text";
import PwIcon from "../../../../../design-system/component/pw-icon";
import IcPlus from "../../../../../design-system/icons/IcPlus";
const ManageCategorieSection = () => {
  return (
    <div className={styles.manageMain}>
      <div className="mb-4">
        <PwIcon ic={<IcPlus />} />
        <PwText text="Manage Categories" color="white" />
      </div>
      <Row className="p-0 m-0">
        <Col md={4} className=" p-0 mb-3">
          <div className="me-3">
            <ManageCategory
              labelHead="HairSpa"
              labelDiscript="Best salon in area"
            />
          </div>
        </Col>
        <Col md={4} className=" p-0 mb-3  ">
          <div className="me-3">
            <ManageCategory
              labelHead="HairSpa"
              labelDiscript="Best salon in area"
            />
          </div>
        </Col>
        <Col md={4} className=" p-0 mb-3 ">
          <div className="me-3">
            <ManageCategory
              labelHead="HairSpa"
              labelDiscript="Best salon in area"
            />
          </div>
        </Col>
        <Col md={4} className=" p-0 mb-3 ">
          <div className="me-3">
            <ManageCategory
              labelHead="HairSpa"
              labelDiscript="Best salon in area"
            />
          </div>
        </Col>
      </Row>
      <div className={styles.buttonSection}>
        <PwButton border={true} kind="secondary" label="Go Back" />
        <PwButton kind="primary" label="Add to new categoey" />
      </div>
    </div>
  );
};
export default ManageCategorieSection;
