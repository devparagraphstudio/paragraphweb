import { IconType } from '@/lib/definitions';

interface PinProps extends IconType {
    className?: string;
}

const Pin: React.FC<PinProps> = ({
    className,
    color = "#000000",
    opacity = 1,
}) => {
    return (
        <svg
            className={className}
            viewBox="0 0 42 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6802 3.6318e-05C9.41019 0.0800363 0.330193 9.28004 0.410193 20.55C0.490193 31.82 21.1302 66.25 21.1302 66.25C21.1302 66.25 41.3002 31.54 41.2202 20.27C41.1502 9.00004 31.9502 -0.0799637 20.6802 3.6318e-05ZM20.8802 29.56C15.4802 29.6 11.0702 25.25 11.0302 19.85C10.9902 14.45 15.3402 10.04 20.7402 10C26.1402 9.96004 30.5502 14.31 30.5902 19.71C30.6302 25.11 26.2802 29.52 20.8802 29.56Z" fill={color} opacity={opacity} />
        </svg>

    );
};

export default Pin;
