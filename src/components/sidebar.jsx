import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <Navbar className="flex-column sidebar" sticky="top">
            <Nav.Item><Link to="/" className="nav-link">Feed</Link></Nav.Item>
            <Nav.Item><Link to="/explore" className="nav-link">Explore</Link></Nav.Item>
        </Navbar>
    )
}

export default Sidebar;