import Spinner from "react-bootstrap/Spinner";
import { Fragment, useEffect, useState } from "react";
import Post from "./post";

export default function Posts() {
    const [posts, setPosts] = useState();

    // Base api url
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

    // Fetch posts
    useEffect(() => {
        fetch(BASE_API_URL + "/api/posts")
            .then(response => response.json())
            .then(result => setPosts(result.data))
    }, []);

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
                        <Post post={post} key={post.id} />
                    )
                })}
            </ul>
        )}
        </Fragment>
    )
}