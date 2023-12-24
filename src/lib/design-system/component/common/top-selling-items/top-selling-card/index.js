import { Col, Container, Row } from "react-bootstrap";
import styles from "./top-selling-card.module.css";
import PwDropdown from "../../../pw-dropdown";

const TopSellingCard = ({ items, dropdown = true, secondary }) => {
  return (
    <Container className="m-0 p-0 mt-3">
      <div className="">
        <Row className={`${styles.sellingCardMain} m-0`}>
          <Col className="p-0">
            <div>Services</div>
          </Col>
          <Col className={styles.dropSection}>
            <div className="d-flex justify-content-end">
              {dropdown && (
                <PwDropdown
                  width="100px"
                  marginBottom="0"
                  dropItems={["Female", "iphone", "laptop", "Hp"]}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
      {secondary ? (
        <div className={`${styles.itemsMain} ${styles.secondry}`}>
          {items.map((item, index) => (
            <div key={index} className={styles.itemsSection}>
              <div>{item.name}</div>
              <div className={styles.qpgSection}>
                <div>Qty: {item.qty}</div>
                <span className={styles.qpgSectionCircle}></span>
                <div>₹ {item.price}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`${styles.itemsMain} ${styles.primary}`}>
          {items.map((item, index) => (
            <div key={index} className={styles.itemsSection}>
              <div>{item.name}</div>
              <div className={styles.qpgSection}>
                <div>Qty: {item.qty}</div>
                <span className={styles.qpgSectionCircle}></span>
                <div>₹ {item.price}</div>
                <span className={styles.qpgSectionCircle}></span>
                <div>{item.type}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default TopSellingCard;
