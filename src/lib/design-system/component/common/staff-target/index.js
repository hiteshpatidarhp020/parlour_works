import { Col, Row } from "react-bootstrap";
import styles from "./staff-target.module.css";
import PwText from "../../pw-text";
const StaffTarget = () => {
  return (
    <div className={styles.staffTargetMain}>
      <div className="mb-3">
        <PwText text="Staff target achieved v/s not-achieved" />
      </div>
      <Row>
        <Col className={styles.targetsSection}>
          <div>08</div>
          <div>Targets achieved</div>
        </Col>
        <Col className={styles.targetsSection}>
          <div>08</div>
          <div>Target not achieved</div>
        </Col>
        <Col className={styles.targetsSection}>
          <div>08</div>
          <div>Total comission spent</div>
        </Col>
      </Row>
    </div>
  );
};
export default StaffTarget;
