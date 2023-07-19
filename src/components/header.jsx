import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" className="header">
            <Container>
                <Link to="/" className="navbar-brand">Microblog</Link>
                <NavbarToggle aria-controls="navigation-bar"></NavbarToggle>
                <Navbar.Collapse id="navigation-bar">
                    <Nav className="ms-auto">
                        <Link to="/login" className="nav-link">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}