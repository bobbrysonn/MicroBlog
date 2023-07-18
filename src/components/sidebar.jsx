import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Sidebar() {
    return (
        <Navbar className="flex-column sidebar" sticky="top">
            <Nav.Item><Nav.Link href="/">Feed</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/explore">Explore</Nav.Link></Nav.Item>
        </Navbar>
    )
}

export default Sidebar;