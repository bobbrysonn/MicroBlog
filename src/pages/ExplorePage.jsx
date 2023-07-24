import Body from "../components/body";
import Posts from "../components/posts";

export default function ExplorePage() {
    return (
        <Body sidebar>
            <h1>Explore</h1>
            <Posts content="explore" />
        </Body>
    );
}