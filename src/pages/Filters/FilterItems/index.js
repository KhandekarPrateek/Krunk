import React from "react";
import { Col, Row } from "reactstrap";
import BlackCross from "../../../assets/blackCross.png";
const FilterItems = ({ title }) => {
  return (
    <Row className="filter-items me-3 mb-3 p-2">
      <Col sm={9} className="pe-4 text-muted">
        {title}
      </Col>
      <Col sm={3}>
        <img src={BlackCross} />
      </Col>
    </Row>
  );
};

export default FilterItems;
