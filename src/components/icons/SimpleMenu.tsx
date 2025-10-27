import { IconType } from '@/lib/definitions';

const SimpleMenu: React.FC<IconType> = ({
    width = 60,
    height = 44,
    color = "#000000",
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="3">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 31H40V29H20V31ZM20 15H40V13H20V15ZM20 23H40V21H20V23Z" fill={color} />
        </svg>

    );
};

export default SimpleMenu;
