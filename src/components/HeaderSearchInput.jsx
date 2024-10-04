const HeaderSearchInput = ({ placeholder, onChange }) => {

    const keyDownHandler = (event) => {
        if (event.key === "Enter" && event.target.value.trim().length > 0) onChange(event.target.value.trim());
    }

    return (
        <input
            className={'h-full w-52 bg-secondary placeholder:text-sm placeholder:text-gray-500 px-5 text-sm border border-transparent focus:border-secondary-content outline-0'}
            type="search"
            placeholder={placeholder}
            onKeyDown={keyDownHandler}
        />
    );
};

export default HeaderSearchInput;
