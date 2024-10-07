import React from 'react';
import clsx from "@/utils/clsx.js";
import CloseIcon from "icon@/CloseIcon.jsx";

const Window = ({ isOpen = false, onClose, children }) => {
    return (
        <div className={clsx(
            'fixed w-screen h-screen bg-secondary/50 top-0 left-0 flex items-center justify-center transition-opacity duration-300 z-10 px-3',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}>
            <div className={'bg-secondary-header p-10 w-full max-w-[500px] rounded-sm relative'}>
                {children}
                <button className={'absolute top-5 right-5'} onClick={onClose}>
                    <CloseIcon/>
                </button>
            </div>
        </div>
    );
};

export default Window;
