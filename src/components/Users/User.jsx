import React from 'react'

function User({user}) {
    const {name, email, phone} = user;
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
            <p>phone no: {phone}</p>
        </div>
    )
}

export default User
