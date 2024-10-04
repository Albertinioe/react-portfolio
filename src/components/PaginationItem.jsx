import React from 'react';

const PaginationItem = ({ isActive = false ,onClick , children }) => {

    const isActiveClass = isActive ? 'bg-blue-600' : 'bg-secondary-header active:bg-blue-600';

    return (
        <button
            onClick={onClick}
            className={'w-10 h-10 rounded-lg  flex items-center justify-center drop-shadow-xl text-sm  ' + isActiveClass}
        >
            {children}
        </button>
    );
};

export default PaginationItem;
