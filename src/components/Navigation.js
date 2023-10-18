import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '../icons';

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About Me' },
  { path: '/projects', text: 'Projects' },
  { path: '/contact', text: 'Contact Me' },
];

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
      <Navbar expand="lg" variant="light" bg="light" className="header">
        <div className="header-right">
          <Navbar.Brand className="logo" href="/">S</Navbar.Brand>
          <Navbar.Brand className="name" href="/">Sane Myburg</Navbar.Brand>
        </div>
        <div className="header-left">
          <Navbar.Toggle className="show-hamburger" onClick={toggleMenu}>
            <HamburgerIcon />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`mr-auto ${showLinks ? 'show-hamburger' : 'hide-links'}`}>
              {links.map((link) => (
                <Nav.Link as={NavLink} to={link.path} key={link.text}>
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  );
};

export default Navigation;
