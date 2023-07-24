import Body from "../components/body";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";
import { format } from "timeago.js";
import { useApi } from "../contexts/ApiProvider";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Posts from "../components/posts";

export default function UserPage() {
    const { username } = useParams();
    const api = useApi();
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const response = await api.get("/users/" + username);
            setUser(response.ok ? response.body : null);
        })();
    }, [])

    return (
        <Body sidebar>
            {user === undefined ? (
                <Spinner variant="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : <Fragment>
                    {user === null ? (
                        <h3>User not found</h3>
                    ): (
                        <Fragment>
                            <Stack direction="horizontal" gap={4}>
                                <Image src={user.avatar_url + "&s=128"} roundedCircle />
                                <div>
                                    <h1>{user.username}</h1>
                                    {user.about_me && <h5>{user.about_me}</h5>}
                                    <p>
                                        Member since: {format(user.first_seen)}
                                        <br />
                                        Last seen: {format(user.last_seen)}
                                    </p>
                                </div>
                            </Stack>
                            <Posts content={user.id} />
                        </Fragment>
                    )}
                </Fragment>}
        </Body>
    );
}

function capitalize(word) {
    return  word.charAt(0).toUpperCase() + word.slice(1);
}