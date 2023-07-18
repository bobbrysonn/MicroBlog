import Container from "react-bootstrap/Container";
import Sidebar from "./sidebar";
import Stack from "react-bootstrap/Stack";
import Posts from "./posts";

export default function Body({ sidebar, children }) {
    return (
        <Container className="mt-3">
            <Stack direction="horizontal">
                {sidebar && <Sidebar/>}
                <Container>
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}