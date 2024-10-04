import React from 'react';
import clsx from "@/utils/clsx.js";

const AsideItem = ({ onClick, title, isActive = false, children }) => {
    return (
        <li>
            <button onClick={onClick} className={clsx(isActive && 'text-blue-600')}>{title}</button>
            {children}
        </li>
    );
};

export default AsideItem;
