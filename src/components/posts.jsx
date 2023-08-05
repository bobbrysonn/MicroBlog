import More from "./More";
import Post from "./post";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { useApi } from "../contexts/ApiProvider";
import { Fragment, useEffect, useState } from "react";

export default function Posts({ content }) {
    const [posts, setPosts] = useState();
    const [pagination, setPagination] = useState();

    const api = useApi();

    // Determine which posts to fetch
    let url;

    async function loadNextPage() {
        const response = await api.get(url, {
            after: posts[posts.length - 1].timestamp,
        });

        if (response.ok) {
            setPosts([...posts, ...response.body.data]);
            setPagination(response.body.pagination);
        }
    }

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
                setPagination(response.body.pagination);
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

            <More pagination={pagination} loadNextPage={loadNextPage} />
        </Fragment>
    )
}

Posts.propTypes = {
    content: PropTypes.string,
}