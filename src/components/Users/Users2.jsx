import React, { use } from 'react'

function Users2({userPromis}) {
    const user = use(userPromis);
    console.log(user);
    return (
        <div>
            <h1>user 2 component</h1>
        </div>
    )
}

export default Users2
