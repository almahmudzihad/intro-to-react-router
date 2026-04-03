import React from 'react'
import { useLoaderData } from 'react-router'
import Post from './Post';

function Posts() {
    const post = useLoaderData();
    return (
        <div>
            <h2>This are my post {post.length}</h2>
            {
                post.map(post => <Post post={post} key={post.id} />)
            }
        </div>
    )
}

export default Posts
