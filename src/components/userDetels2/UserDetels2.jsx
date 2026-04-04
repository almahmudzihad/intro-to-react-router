import React, { use } from 'react'

function UserDetels2({userPromis}) {
    const user = use(userPromis)
    return (
        <div>
            <h3>{user.name}</h3>
            <p>email: {user.email}</p>
        </div>
    )
}

export default UserDetels2
