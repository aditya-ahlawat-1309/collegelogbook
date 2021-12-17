import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
function NavbarJS() {
    return (
      <>
        <Navbar bg="white" expand="lg" >
          <Container>
            <div className='d-flex mx-3'>
              <Navbar.Brand>
                Log BOOK
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/login">Non-Alumni LogIn</Nav.Link>
                  <Nav.Link href="/login_users" className="mx-5">
                   2019 Alumni LogIn
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </>
    );
}

export default NavbarJS
