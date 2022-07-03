import React from "react";
import {
  Navbar,
  Link,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

const New = () => {
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
              <Navbar.Brand href="#">Evaly</Navbar.Brand>
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
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Cart</Nav.Link>
                    <Nav.Link href="#action2">Login</Nav.Link>
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

export default New;
