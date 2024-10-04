import clsx from "@/utils/clsx.js";

const Link = ({ variant = 'primary', onClick, title = '', styles, size = 'sm'}) => {

    let linkVariants;

    switch (variant) {
        case 'primary': linkVariants = 'text-blue-600';
            break;
        case 'danger': linkVariants = 'text-red-600';
            break;
        case 'grey': linkVariants = 'text-gray-300';
            break;
    }

    return (
        <span className={clsx('cursor-pointer',linkVariants,styles,'text-'+size)} onClick={onClick}>
            {title}
        </span>
    );
};

export default Link;
