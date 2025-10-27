import { IconType } from '@/lib/definitions';

const Close: React.FC<IconType> = ({
    width = 64,
    height = 64,
    color = "#000000",
    opacity = 1,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" // 🔥 this allows stretching
        >
            <g>
                <path
                    id="Vector"
                    d="M55.9999 55.9999L32.0001 32.0001M32.0001 32.0001L8 8M32.0001 32.0001L56.0001 8M32.0001 32.0001L8 56.0001"
                    stroke={color}
                    opacity={opacity}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default Close;
