import Post from "./post";
import Spinner from "react-bootstrap/Spinner";
import { useApi } from "../contexts/ApiProvider";
import { Fragment, useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState();
    const api = useApi();

    // Base api url
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

    // Fetch posts
    useEffect(() => {
        (async () => {
            const response = await api.get("/feed");

            // Check whether response is ok
            if (response.ok) {
                setPosts(response.body.data);
            } else {
                setPosts(null);
            }
        })()
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