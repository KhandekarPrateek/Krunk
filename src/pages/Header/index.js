import React from "react";
import { Row, Col } from "reactstrap";
import RobotsIcon from "../../assets/SIMPLE CHATBOTS.png";
const Header = () => {
  return (
    <Row className="border rounded-2 ">
      <Col sm={1}>
        <img src={RobotsIcon} />
      </Col>
      <Col>
        <Row className="d-flex justify-content-start g-0 text-color">Timpu</Row>
        <Row className="g-0">
          <div className="d-flex justify-content-start w-50 text-color">
            Chat assisstant
          </div>
          <div className="d-flex justify-content-end w-50 text-color">
            Online
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
