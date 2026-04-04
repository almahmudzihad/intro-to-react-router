import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

function PostDetels() {
    const post = useLoaderData();
    const navigate = useNavigate();
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=>navigate('/posts')}>Go Back</button>
        </div>
    )
}

export default PostDetels
