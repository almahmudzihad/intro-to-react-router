import React from 'react'
import { useLoaderData } from 'react-router'

function Users() {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>this is user component</h1>
        </div>
    )
}

export default Users
