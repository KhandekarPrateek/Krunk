import React from "react";
import { Row, Col } from "reactstrap";
import RobotsIcon from "../../assets/SIMPLE CHATBOTS.png";
import Arrow from "../../assets/Vector.png";
const Header = () => {
  return (
    <Row className=" w-100 p-4 header-container g-0 ">
      <Col sm={1}>
        <img src={RobotsIcon} />
      </Col>
      <Col sm={11}>
        <Row className="g-0">
          <div className="d-flex justify-content-start  text-color">Timpu</div>
          {/* <img src={Arrow}  /> */}
        </Row>
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
