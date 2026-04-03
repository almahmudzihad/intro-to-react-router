import React from 'react'
import { useLoaderData } from 'react-router'

function UserDetels() {
    const user = useLoaderData();
    const {name, website, username} = user;
    return (
        <div>
            <h3>user detels </h3>
            <h3>{name}</h3>
            <p>website: {website}</p>
            <p>userName: {username}</p>
        </div>
    )
}

export default UserDetels
