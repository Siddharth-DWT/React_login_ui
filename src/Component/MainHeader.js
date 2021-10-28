import React  from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";


export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <div className="heaser_logo">
                        <Navbar.Brand>LOGO</Navbar.Brand>
                    </div>
                <Nav className="nav_bar_wrapper">
                    <Nav><Link  className="userheader">Home</Link></Nav>
                    <Nav><Link  className="userheader">About Us</Link></Nav>
                    <Nav><span  className="userheader">Contact</span></Nav>

                </Nav>
                <div className="header_btn">
                    <Button variant="outline-primary" size="lg" className="login-register-btn login_header">
                        <Link to="/login">LOGIN</Link>
                    </Button>
                    <Button variant="outline-primary" size="lg" className="login-register-btn register_header">
                        <Link to="/Register">Register</Link>
                    </Button>
                </div>
                </div>
            </Navbar>
        </div>
    )
};