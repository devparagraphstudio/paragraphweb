import { IconType } from '@/lib/definitions';

const ArrowLg: React.FC<IconType> = ({
    width = 40,
    height = 40,
    color = "#000000",
    opacity = 1,
    rotate = 0,
}) => {
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path d="M35 19.9998L26.6667 28.3332M35 19.9998L26.6667 11.6665M35 19.9998H5" stroke={color} opacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowLg;
