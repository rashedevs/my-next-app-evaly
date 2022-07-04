import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import data from "../../public/data";
import Footer from "./Footer";
import Header from "./Header";

const Cart = () => {
  const [selects, setSelects] = useState();
  const router = useRouter();
  const id = router.query.id;
  const product = data.find((a) => a.id == id);
  if (!product) {
    return <div>No Product Found</div>;
  }
  return (
    <>
      <Header></Header>
      <div
        style={{ height: "80vh" }}
        className="d-flex align-items-center justify-content-around"
      >
        <div className="container">
          <h3 className="text-danger text-center mt-4">Checkout</h3>
          <hr className="w-50 mx-auto text-danger" />

          <Table bordered hover variant="danger" className="mb-5">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <>
                <tr product={product} key={product._id}>
                  <td>
                    <img
                      className="rounded"
                      style={{ height: "60px", width: "70px" }}
                      src={product?.img}
                      alt=""
                    />
                  </td>
                  <td>{product?.name}</td>
                  <td>${product?.price}</td>
                  <td>
                    <select
                      value={selects}
                      onChange={(e) => setSelects(e.target.value)}
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </td>
                </tr>
              </>
            </tbody>
          </Table>
        </div>
        <div className="mx-auto mt-5 me-5">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Price</Card.Title>
              <Card.Title>
                $
                {selects > 1 ? (
                  <>{parseInt(product.price) * parseInt(selects)}</>
                ) : (
                  <>{parseInt(product.price) * 1}</>
                )}
              </Card.Title>
              <Button variant="primary">Checkout</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
