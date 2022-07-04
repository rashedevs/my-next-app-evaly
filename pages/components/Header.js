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

const Header = () => {
  return (
    <>
      {[false].map((expand) => (
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
                <Navbar.Brand href="/" className="fw-bold">
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
                      <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                    <Link href="/components/Cart">
                      <Nav.Link href="/Cart">Cart</Nav.Link>
                    </Link>
                    <Link href="/components/Login">
                      <Nav.Link href="/login">Login</Nav.Link>
                    </Link>
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
