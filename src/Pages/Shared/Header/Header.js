import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo4.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="header_bgColor py-3" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/home"><img src={logo} width="120px" alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto anchor">

                            <Link to="/home">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/about">About</Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className="text-white" href="#deets">More deets</Nav.Link>
                            <Nav.Link className="text-white" eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;