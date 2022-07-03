import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    alert("ok");
  };

  return (
    <div className="container w-50 mx-auto" style={{ height: "100vh" }}>
      <h2 className="text-danger my-4 text-center">Please Login</h2>
      <Form onSubmit={handleLoginSubmit}>
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

        <Button
          variant="danger"
          type="submit"
          className="d-block mx-auto w-50 my-3 fw-bold rounded"
        >
          Login
        </Button>
      </Form>
      {/* {errorContainer} */}
      <p>
        Don`t have an account?{" "}
        {/* <Link to="/" className="text-primary pe-auto text-decoration-none">
          Please Login
        </Link> */}
        Please Register
      </p>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
