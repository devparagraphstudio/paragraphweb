import { IconType } from '@/lib/definitions';

const ArrowUpRight: React.FC<IconType> = ({
    width = 64,
    height = 64,
    color = "#000000",
    opacity = 1,
}) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg
                width={width}
                height={height}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    transform: 'translate(50%, 50%)',
                    marginLeft: '-50%',
                    marginTop: '-50%'
                }}
            >
                <path d="M22.6077 1.39355H10.8232M22.6077 1.39355L22.6071 13.1787M22.6077 1.39355L1.39453 22.6068" stroke={color} opacity={opacity} strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    );
};

export default ArrowUpRight;
