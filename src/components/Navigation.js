import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '../icons';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Me' },
  { path: '/projects', text: 'Projects' },
  { path: '/contact', text: 'Contact Me' },
];

const Navigation = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" className="header">
        <div className="header-right">
          <Navbar.Brand className="logo" href="/">S</Navbar.Brand>
          <Navbar.Brand className="name" href="/">Sane Myburg</Navbar.Brand>
        </div>
        <div className="header-left">
          <Navbar.Toggle className="show-hamburger" onClick={toggleOverlay}>
            <HamburgerIcon />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="hide-links">
              {links.map((link) => (
                <Nav.Link as={NavLink} to={link.path} key={link.text} className="nav-link">
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <p className="menu">Menu</p>
            <p className="name-mobile">Sane M</p>
            {links.map((link) => (
              <Nav.Link as={NavLink} to={link.path} key={link.text} onClick={closeOverlay} className="nav-link">
                {link.text}
              </Nav.Link>
            ))}
            <Button className="close-button" onClick={closeOverlay}>x</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
