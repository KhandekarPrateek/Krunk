import React from "react";
import Slider from "react-slick";
import { Row, Badge, Container, Col } from "reactstrap";
import Arrow from "../../assets/Frame 5903.png";
const Tags = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Row className="text-secondary g-0  mt-5 mb-3">
        Popular tags for handbag
      </Row>
      <Row className="g-0 d-flex align-items-center justify-content-center mb-5 slider">
        <Slider {...settings}>
          <Badge className="badge-tags d-flex align-items-center justify-content-center ">
            New
          </Badge>
          <Badge className="badge-tags  d-flex align-items-center justify-content-center">
            New
          </Badge>
          <Badge className="badge-tags  d-flex align-items-center justify-content-center">
            New
          </Badge>
          <Badge className="badge-tags d-flex align-items-center justify-content-center">
            New
          </Badge>
        </Slider>
      </Row>
    </Container>
  );
};
export default Tags;
