import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Row,
  Container,
  Col,
} from "reactstrap";
import BagImage from "../../assets/Bag.png";
import Vector from "../../assets/Vector.png";
import Chevron from "../../assets/chevron-right.png";

const Bag = () => {
  return (
    <Container>
      <Card className="card-bag p-2 ">
        <CardBody>
          <Row className="bag-image-container p-4 mb-3">
            <Col
              className="d-flex align-items-center justify-content-center "
              sm={3}
            >
              <img alt="Sample" src={BagImage} />
            </Col>
            <Col sm={9}>
              <Row>
                <Col sm={9}>
                  <CardTitle tag="h5">Bags on Timpu</CardTitle>
                </Col>
                <Col
                  sm={3}
                  className="d-flex justify-content-start align-items-start"
                >
                  <img src={Vector} className="vector-image" />
                </Col>
              </Row>
              <Row>
                <Col sm={9}>
                  <CardSubtitle className="text-muted" tag="h6">
                    1123 products
                  </CardSubtitle>
                </Col>
                <Col
                  sm={3}
                  className="d-flex justify-content-start align-items-start"
                >
                  <img src={Chevron} className="vector-image" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <CardText>
              Or set filter and help us choose the best bag for you.
            </CardText>
          </Row>
        </CardBody>
      </Card>
      <Row className="g-0 ps-3 text-secondary ">4:48PM</Row>
    </Container>
  );
};

export default Bag;
