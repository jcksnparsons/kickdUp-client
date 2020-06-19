import React from 'react';

const PostCard = (props) => {

    return (
        <>
            <p>{props.post.manufacturer.name}</p>
            <p>{props.post.model}</p>
        </>
    )
}

export default PostCard