import { IconType } from '@/lib/definitions';

const Menu: React.FC<IconType> = ({
    width = 30,
    height = 24,
    color = "#000000",
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 23.9999H30V21.8181H0V23.9999Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 2.18182H30V0H0V2.18182Z" fill={color} />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 13.091H30V10.9092H0V13.091Z" fill={color} />
        </svg>

    );
};

export default Menu;