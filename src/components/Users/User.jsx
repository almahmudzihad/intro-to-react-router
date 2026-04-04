import React, { Suspense, useState } from 'react'
import { Link } from 'react-router';
import UserDetels2 from '../userDetels2/UserDetels2';

function User({user}) {
    const [showInfo, setShowInfo] = useState(false)
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
    const userPromis = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p><small>phone no: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Detels</Link>
            <button onClick={()=> setShowInfo(!showInfo)}>{showInfo? "Hide": "Show"} Info</button>
            {
                showInfo && <Suspense fallback={<h2>lodin...</h2>}>
                    <UserDetels2 userPromis={userPromis} />
                </Suspense>
            }
        </div>
    )
}

export default User
