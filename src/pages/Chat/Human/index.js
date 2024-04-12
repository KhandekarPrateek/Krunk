import React from "react";
import { Card, CardBody, CardText } from "reactstrap";

const Human = ({ text, Time }) => {
  return (
    <div>
      <Card className="human">
        <CardBody className="rounded-5 ">
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
      <small className="text-secondary ps-1">{Time}</small>
    </div>
  );
};

export default Human;
