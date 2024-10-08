import React from 'react';

const Video = ({ poster }) => {
    return (
        <>
            <video poster={poster}></video>
            <button className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group'}>
                <svg className={'transition-transform group-hover:scale-90'} width="68" height="75" viewBox="0 0 68 75"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.2436 1.65369C5.48193 -2.2249 0 0.952489 0 8.74492V66.2496C0 74.0498 5.48193 77.2231 12.2436 73.3482L62.5056 44.5233C69.2695 40.6433 69.2695 34.3572 62.5056 30.4781L12.2436 1.65369Z"
                        fill="#2F2BE6"/>
                </svg>
            </button>
        </>
    );
};

export default Video;
