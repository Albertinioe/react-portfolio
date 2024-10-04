import React from 'react';

const RelatedPostItem = ({ post }) => {
    return (
        <button className={'flex flex-col items-start'}>
            <h5 className={'text-sm text-yellow-200'}>{post.title}</h5>
            <span className={'text-xs text-gray-400'}>{post.date}</span>
        </button>
    );
};

export default RelatedPostItem;
