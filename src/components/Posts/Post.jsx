import React from 'react'
import { Link } from 'react-router';

function Post({post}) {
    const {id, title} = post;
    return (
        <div>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}>
                <button>Show post</button>
            </Link>
        </div>
    )
}

export default Post
