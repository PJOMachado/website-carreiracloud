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
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>Sobre</Nav.Link>
              <Nav.Link href='#course'>Curso</Nav.Link>
              <Nav.Link href='#carreira'>Carreira</Nav.Link>
              <Nav.Link href='#blog'>Blog</Nav.Link>
              <Nav.Link href='#contact'>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
