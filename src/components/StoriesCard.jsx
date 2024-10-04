import React from 'react';

const StoriesCard = ({ story }) => {
    return (
        <div className={'h-[195px] w-36 group relative shadow flex-shrink-0'}>
            <img className={'h-full w-full object-cover transition-all brightness-75 duration-500 group-hover:scale-105 rounded-md'} src={story.image} alt="" draggable={"false"}/>
            <figcaption className={'text-xs absolute top-3 start-3 font-light'}>{story.title}</figcaption>
            <span className={'text-xs absolute bottom-2 end-3 font-light'}>{story.date}</span>
        </div>
    );
};

export default StoriesCard;
