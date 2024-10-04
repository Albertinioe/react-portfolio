import clsx from "@/utils/clsx.js";
const NavItem = ({ title = '', onClick,  children, styles}) => {
    return (
        <div className={clsx('relative', styles)}>
            <button
                onClick={onClick}
                className={'py-3 px-3 uppercase text-[11px] hover:bg-secondary-header-item-hover flex items-center gap-2 peer active:bg-blue-800'}
            >
                {title}
                {children &&
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L0.669872 0.5L9.33013 0.5L5 5Z" fill="white"/>
                    </svg>
                }
            </button>
            {children}
        </div>
    );
};

export default NavItem;
