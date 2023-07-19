import Body from "../components/body";
import { useParams } from "react-router-dom";

export default function UserPage() {
    const { username } = useParams();

    return (
        <Body sidebar>
            <h1>{capitalize(username)}</h1>
            <p>TODO</p>
        </Body>
    );
}

function capitalize(word) {
    return  word.charAt(0).toUpperCase() + word.slice(1);
}