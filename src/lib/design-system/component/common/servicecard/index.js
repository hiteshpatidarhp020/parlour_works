import { Col, Image, Row } from "react-bootstrap";
import styles from "./servicecard.module.css";
import PwText from "../../pw-text";
import PwDivider from "../../pw-divider";
import PwSpace from "../../pw-space";

const Servicecard = ({ services, labelHeading, labelDiscription }) => {
  if (!services || !Array.isArray(services)) {
    return;
  }

  const Servicecart = {
    label: labelHeading,
    label: labelDiscription,
  };
  return (
    <>
      <div style={{ width: "100%" }} className={styles.cardouterrow}>
        <Row className={styles.cardcolone}>
          <Col>
            <Image src="../images/dashboard/hairspa.png" />
            <div className={styles.cardcoltwo}>
              <PwText text={labelHeading} appearance="body_s_medium" />
              <PwSpace value="2px" />
              <PwText
                className={styles.headertext}
                text={labelDiscription}
                appearance="body_m_regular"
              />
            </div>
          </Col>
        </Row>
        <PwDivider
          className={styles.divider}
          marginTop="20px"
          marginBottom="15px"
        />
        {services.map((service) => (
          <div style={{ color: "white" }} key={service.text}>
            <Row>
              <Col xs={7} md={7} className={styles.colcontentleft}>
                <PwText text={service.name} appearance="body_s_regul" />
                <PwSpace value="15px" />
                <PwSpace value="15px" />
              </Col>
              <Col md={4} className={styles.colcontentright}>
                <Col md={4} className="">
                  <PwText text={service.gender} appearance="body_s_regul" />
                  <PwSpace value="15px" />
                </Col>

                <Col md={2} className="">
                  <div>
                    <PwText text={service.price} appearance="body_s_regul" />
                    <PwSpace value="15px" />
                  </div>
                </Col>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </>
  );
};
export default Servicecard;
