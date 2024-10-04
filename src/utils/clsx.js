export default function clsx(...classNames) {
    return [...classNames].filter((item) => item).join(' ');
}
