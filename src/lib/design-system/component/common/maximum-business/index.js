import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./maximum-business.module.css";
import PwText from "../../pw-text";
import PwIcon from "../../pw-icon";
import IcService from "../../../icons/IcService";
import PwDropdown from "../../pw-dropdown";

const MaximumBusiness = ({ artists, title = "Maximum business by artist" }) => {
  return (
    <div className={styles.maximumBusinessMain}>
      <div className="mb-3">
        <PwText text={title} />
      </div>
      {Array.isArray(artists) && artists.length > 0 ? (
        artists.map((artist, index) => (
          <Row key={index} className={styles.rankSection}>
            <Col className="p-0">
              <div>
                <div>{artist.name}</div>
              </div>
            </Col>
            <Col className="p-0">
              <div className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                  <div className="me-4">{`₹ ${artist.amount}`}</div>
                  <div className={styles.rankTag}>
                    <PwIcon ic={artist.ic} />
                    <PwText text={`Rank ${artist.rank}`} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ))
      ) : (
        <p>No artist data available</p>
      )}
    </div>
  );
};

export default MaximumBusiness;
