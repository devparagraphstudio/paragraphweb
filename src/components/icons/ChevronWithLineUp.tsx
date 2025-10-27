import { IconType } from '@/lib/definitions';

const ChevronWithLineUp: React.FC<IconType> = ({
    // width = 8,
    // height = 16,
    // color = "#000000",
    // opacity = 1,
}) => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.6667 22.6665H5.33337" stroke="#292D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.8266 41.3335L31.9999 34.5068L25.1732 41.3335" stroke="#292D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default ChevronWithLineUp;
