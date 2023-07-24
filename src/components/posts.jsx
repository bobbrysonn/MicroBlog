import Post from "./post";
import Spinner from "react-bootstrap/Spinner";
import { useApi } from "../contexts/ApiProvider";
import { Fragment, useEffect, useState } from "react";

export default function Posts({ content }) {
    const [posts, setPosts] = useState();
    const api = useApi();

    // Base api url
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

    // Determine which posts to fetch
    let url;

    switch(content) {
        case "feed":
        case undefined:
            url = "/feed";
            break;
        case "explore":
            url = "/posts";
            break;
        default:
            url = `/users/${content}/posts`;
            break;
    }

    // Fetch posts
    useEffect(() => {
        (async () => {
            const response = await api.get(url);

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