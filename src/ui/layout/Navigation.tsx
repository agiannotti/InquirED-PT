import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../stylesheets/navbar.css';

const Navigation: React.FC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Brand href='#home' className='just'>
            InquirED
          </Navbar.Brand>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Admin Panel</Nav.Link>
              <Nav.Link href='#features'>Unit Dashboard</Nav.Link>
              <Nav.Link href='#pricing'>Curriculum Library</Nav.Link>
              <Nav.Link href='#pricing'>PD & Learning</Nav.Link>
              <Nav.Link href='#pricing'>Help</Nav.Link>
              <a
                className='nav-link dropdown-toggle text-lowercase text-capitalize'
                href='#'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Admin
                <div
                  className='avatar avatar-sm'
                  style={{ position: 'relative' }}
                >
                  A
                </div>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
