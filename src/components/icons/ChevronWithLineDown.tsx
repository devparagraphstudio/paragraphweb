import { IconType } from '@/lib/definitions';

const ChevronWithLineDown: React.FC<IconType> = ({
    // width = 8,
    // height = 16,
    // color = "#000000",
    // opacity = 1,
}) => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.6667 41.3333H5.33337" stroke="#292D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.8266 22.6667L31.9999 29.4934L25.1732 22.6667" stroke="#292D32" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ChevronWithLineDown;
