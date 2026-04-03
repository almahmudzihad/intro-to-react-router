import React from 'react'
import { useLoaderData } from 'react-router'
import User from './User';

function Users() {
    const users = useLoaderData();
   
    return (
        <div>
            <h1>this is user component</h1>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
        </div>
    )
}

export default Users
