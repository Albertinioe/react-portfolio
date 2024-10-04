import clsx from "@/utils/clsx.js";

const Avatar = ({ image, size = 'lg', hasBorder = true, isRounded = true }) => {

    // const sizeAvatar = size === 'small' ? 'w-10' : 'w-[100px]';

    let sizeAvatar;

    switch (size) {
        case 'sm': sizeAvatar = 'w-10';
            break;
        case 'md': sizeAvatar = 'w-16';
            break;
        case 'lg': sizeAvatar = 'w-[100px]';
            break;
        case 'xl': sizeAvatar = 'w-[150px]';
            break;
    }

    const hasBorderAvatar = hasBorder ? 'border-2 border-white' : '';

    const isRoundedAvatar = isRounded ? 'rounded-full' : 'rounded-md';

    return (
        <img
            className={clsx('aspect-square', sizeAvatar, hasBorderAvatar, isRoundedAvatar)}
            src={image} alt="user avatar"
        />
    );
};

export default Avatar;
