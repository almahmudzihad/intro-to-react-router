import React from 'react'
import { Link } from 'react-router';

function User({user}) {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p><small>phone no: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Detels</Link>
        </div>
    )
}

export default User
