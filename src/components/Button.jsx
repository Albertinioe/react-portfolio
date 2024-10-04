import clsx from '@/utils/clsx.js'

const Button = ({title = '', isDisabled = false, variant='primary', size = 'normal', style = '', onClick}) => {
    let typeVariant;

    switch (variant) {
        case 'primary': typeVariant = 'bg-blue-800 text-white';
            break;
        case 'danger': typeVariant = 'bg-red-700 text-white';
            break;
        case 'outline-primary': typeVariant = 'bg-transparent bg-blue-800 border-blue-800';
            break;
    }

    return (
        <button
            onClick={onClick}
            className={clsx('text-sm py-3 rounded-full px-4', typeVariant, size, style)}
            disabled={isDisabled}
        >{ title }</button>
    );
};

export default Button;
