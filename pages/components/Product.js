import React from "react";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";
import data from "../../public/data";

const Product = () => {
  const productt = data.map((single) => {
    return single;
  });
  const prod = productt[0];
  // console.log(prod);
  return (
    <>
      <div className="text-center fw-bold my-4 text-danger my-5">
        <h2>Our Products</h2>
      </div>
      <div className="d-flex items-center justify-content-center">
        <div>
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>{prod.description}</Card.Text>
              <Card.Text>$ {prod.price} USD</Card.Text>
              <Link href={`/components/${prod.id}`} passHref>
                <Button variant="primary">Add To Cart</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Product;
