import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
const Bot = ({ text, Time }) => {
  console.log(text, "text");
  return (
    <div>
      <Card className="bot ">
        <CardBody className="rounded-5 ">
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
      <small className="text-secondary ps-1">{Time}</small>
    </div>
  );
};

export default Bot;
