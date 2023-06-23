import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/4.jpg';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <div className="profile-image">
            <Image
              src={profileImage}
              width={30}
              height={30}
              className="d-inline-block align-top"
              alt="Profile Image"
            />
          </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" className="nav-link">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-link">
            Projects
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://github.com/Lahirupramuditha0000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/lahiru-pramuditha-345441274/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
