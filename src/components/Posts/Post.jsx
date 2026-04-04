import React from 'react'
import { Link, useNavigate } from 'react-router';

function Post({post}) {
    const {id, title} = post;
    const navigate = useNavigate()
    const handelNavigate= () =>{
        navigate(`/posts/${id}`);
    }
    return (
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show post</button>
            </Link>
            <button onClick={handelNavigate}>Detels of {id}</button>
        </div>
    )
}

export default Post
