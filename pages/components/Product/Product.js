import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = () => {
  return (
    <>
      <div className="text-center fw-bold my-4 text-danger my-5">
        <h3>Our Products</h3>
      </div>
      <div className="d-flex items-center justify-content-center">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Product Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Product;
