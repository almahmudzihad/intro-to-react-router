import React from 'react'
import { useLoaderData } from 'react-router'

function PostDetels() {
    const post = useLoaderData();
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetels
