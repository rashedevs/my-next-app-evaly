import React from "react";
import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="secondary"
          variant="dark"
          expand={expand}
          className="mb-0"
        >
          <Container className="flex">
            <div>
              <Link href="/" passHref>
                <Navbar.Brand href="/" className="fw-bold fs-2">
                  Evaly
                </Navbar.Brand>
              </Link>
            </div>
            <div>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link href="/" passHref>
                      <Nav.Link href="/" className="fw-bold text-white mx-2">
                        Home
                      </Nav.Link>
                    </Link>
                    {/* <Link href="/components/Cart">
                      <Nav.Link
                        href="/Cart"
                        className="fw-bold text-white mx-2"
                      >
                        Cart
                      </Nav.Link>
                    </Link> */}
                    {user ? (
                      <button className="text-center mx-2 rounded">
                        <p className="my-auto">{user.email}</p>
                      </button>
                    ) : (
                      ""
                    )}
                    {user ? (
                      <button
                        className="text-align-left text-white bg-danger mx-2 fw-bold rounded"
                        onClick={() => signOut(auth)}
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link href="/components/Login">
                        <Nav.Link href="/login">
                          <span className="text-white bg-info mx-2 fw-bold rounded p-2">
                            Login
                          </span>
                        </Nav.Link>
                      </Link>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
