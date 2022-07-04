import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import Header from "./Header";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    if (user) {
      router.push(redirect || "/");
    }
  });

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <Header></Header>
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
          <Link href="/components/Register" className="text-primary pe-auto">
            <span
              style={{ cursor: "pointer" }}
              className="text-decoration-none text-danger"
            >
              Please Register
            </span>
          </Link>
        </p>
        {/* <ToastContainer /> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
