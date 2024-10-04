import React from 'react';

const FieldAutoHeight = ({ placeholder }) => {
    return (
        <div
            contentEditable={"true"}
            data-ph={placeholder}
            className={'bg-transparent flex-1 outline-0 text-sm'}
        ></div>
    );
};

export default FieldAutoHeight;
