import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <Stack direction="horizontal" className="post py-3">
            <Image src={post.author.avatar_url + "&s=64"} />
            <div>
                <p><Link to={"/user/" + post.author.username}>{post.author.username}</Link>&mdash;{post.timestamp}</p>
                <p>{post.text}</p>
            </div>
        </Stack>
    )
}