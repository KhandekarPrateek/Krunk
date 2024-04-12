import React from "react";
import { Container, Col, Row } from "reactstrap";
import SliderImage from "../../assets/sliders-horizontal.png";
import FilterItems from "./FilterItems";
import FilterItemsActive from "./FilterItemsActive";

const Filters = () => {
  return (
    <Container className="p-3">
      <Row className="text-secondary">
        <Col>Select filters</Col>
        <Col className="d-flex align-items-end justify-content-end">
          <img src={SliderImage} />
          Filter
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={4}>
          <FilterItemsActive title="Strap" />
        </Col>
        <Col sm={4}>
          <FilterItems title="Colour" />
        </Col>
        <Col sm={4}>
          <FilterItems title="Size" />
        </Col>
        <Col sm={4}>
          <FilterItems title="Brand" />
        </Col>
        <Col sm={4}>
          <FilterItems title="Material" />
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
