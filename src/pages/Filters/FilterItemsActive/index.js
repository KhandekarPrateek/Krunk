import React from "react";
import { Col, Row } from "reactstrap";
import BlueCross from "../../../assets/BlueCross.png";

const FilterItemsActive = ({ title }) => {
  return (
    <Row className="filter-items-active me-3 mb-3 p-2  border border-danger ">
      <Col sm={9} className="pe-4  ">
        {title}
      </Col>
      <Col sm={3}>
        <img src={BlueCross} />
      </Col>
    </Row>
  );
};

export default FilterItemsActive;
