import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import MessageVector from "../../assets/MessageVector.png";
import PaperClip from "../../assets/paperclip.png";
import Logo from "../../assets/Logo.svg";
const Message = () => {
  return (
    <Container className="message-conatiner">
      <Row className="p-3">
        <Col sm={9}>
          <div className="input-container d-flex align-items-center">
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Type Your Message"
              type="email"
              size="lg"
              className="input rounded-4"
            />
            <img src={PaperClip} alt="PaperClip" className="input-image" />
          </div>
        </Col>
        <Col
          sm={3}
          className="d-flex align-items-center justify-content-center message-vector rounded-4"
        >
          <img src={MessageVector} />
        </Col>
      </Row>
      <p className="p-3 align-items-center justify-content-center d-flex">
        <span className="powered-by me-2">Powered by</span>

        <span className="krunk-ai me-2">Krunk.ai</span>

        <img src={Logo} alt="PaperClip" />
      </p>
    </Container>
  );
};

export default Message;
