import Spinner from "react-bootstrap/Spinner";
import { Fragment, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState();

    // If posts if undefined, render spiner
    // Else show posts
    return (
        <Fragment>
        {posts === undefined ? (
            <Spinner variant="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        ) : (
            <ul>
                {posts.map(post => {
                    return (
                        <li key={post.id}>
                            <strong>{post.author.fullname}</strong> &mdash; {post.timestamp}
                            <p>{post.text}</p>
                            <br />
                        </li>
                    )
                })}
            </ul>
        )}
        </Fragment>
    )
}