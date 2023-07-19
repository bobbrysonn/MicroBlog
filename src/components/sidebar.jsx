import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <Navbar className="flex-column sidebar" sticky="top">
            <Nav.Item><NavLink to="/" className="nav-link">Feed</NavLink></Nav.Item>
            <Nav.Item><NavLink to="/explore" className="nav-link">Explore</NavLink></Nav.Item>
        </Navbar>
    )
}

export default Sidebar;