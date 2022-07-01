import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={Logo} alt='logo' className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav menu-button' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='nav me-auto'>
              <Nav.Link as={Link} to='/' href='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/carreira' href='/carreira'>
                Carreira
              </Nav.Link>
              <Nav.Link as={Link} to='/blog' href='/blog'>
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to='/sobre' href='/sobre'>
                Sobre
              </Nav.Link>
              <Nav.Link as={Link} to='/curso' href='/curso'>
                Curso
              </Nav.Link>
              <Nav.Link as={Link} to='/contato' href='/contato'>
                Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
