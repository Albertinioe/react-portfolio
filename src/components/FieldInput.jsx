import React from 'react';

const FieldInput = ({ placeholder, type, value, onChange }) => {
    return (
        <input
            className={'bg-transparent border-b border-b-white/20 w-full pb-2 outline-0 text-sm mb-3 placeholder:text-white/20'}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default FieldInput;
