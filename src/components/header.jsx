import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function Header() {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top" className="header">
            <Container>
                <Navbar.Brand href="/">Microblog</Navbar.Brand>
                <NavbarToggle aria-controls="navigation-bar"></NavbarToggle>
                <Navbar.Collapse id="navigation-bar">
                    <Nav className="ms-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}