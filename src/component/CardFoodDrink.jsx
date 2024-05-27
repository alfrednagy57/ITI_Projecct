import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function CardFoodDrink(props) {
  return (
    <Card className="drink position-relative shadow-lg">
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="cardbody fs-3 d-flex justify-content-center align-items-center position-absolute w-50 h-100 text-center ">
        <div className="index">
          <Card.Title className="text-success">{props.title}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
          <Button className="btn btn-success mt-4" variant="primary">
            <NavLink className="m-2" to="/payment">Buy</NavLink>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardFoodDrink;
