import React from "react";
import { Row, Col } from "reactstrap";
import RobotsIcon from "../../assets/SIMPLE CHATBOTS.png";
import Arrow from "../../assets/Vector.png";
import Dot from "../../assets/Ellipse 25.png";
const Header = () => {
  return (
    <Row className=" w-100 p-4 header-container g-0 mt-3">
      <Col sm={1}>
        <div className="position-relative">
          <img src={RobotsIcon} className="robot-icon" />
          <img src={Dot} className="dot-icon" />
        </div>
      </Col>
      <Col sm={1}></Col>
      <Col sm={10}>
        <Row className="g-0 ">
          <Col
            sm={3}
            className="d-flex justify-content-start  text-color timpu-header p-0"
          >
            Timpu
          </Col>
          <Col>
            <img src={Arrow} className="vector-image p-0  " />
          </Col>
        </Row>
        <Row className="g-0">
          <div className="d-flex justify-content-start w-50 text-color">
            Chat assisstant
          </div>
          <div className="d-flex align-items-center w-50 text-color position-relative justify-content-end ">
            <img src={Dot} className="dot-icon-online" />
            <span>Online</span>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
