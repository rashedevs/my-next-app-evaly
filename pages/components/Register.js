import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/dist/client/link";
import Header from "./Header";
import Footer from "./Footer";

const Register = () => {
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Password did not match");
      event.target.reset();
      return;
    }
  };
  return (
    <>
      <Header></Header>
      <div className="container w-50 mx-auto" style={{ height: "100vh" }}>
        <h2 className="text-danger my-4 text-center">Please Register</h2>
        <Form onSubmit={handleRegisterSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            className="d-block mx-auto w-50 my-3 fw-bold rounded"
          >
            Register
          </Button>
        </Form>
        {/* {errorContainer} */}
        <p>
          Already have an account?{" "}
          <Link
            href="/components/Login"
            className="text-primary pe-auto text-decoration-none"
          >
            Please Login
          </Link>
        </p>
        {/* <ToastContainer /> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
