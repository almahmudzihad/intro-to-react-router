import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router'

function PostDetels() {
    const post = useLoaderData();
    const navigate = useNavigate();
    const params = useParams;
    console.log(params);
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=>navigate('/posts')}>Go Back</button>
        </div>
    )
}

export default PostDetels
