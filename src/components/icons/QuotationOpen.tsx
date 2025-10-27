import { IconType } from '@/lib/definitions';
import Image from 'next/image';

const QuotationOpen: React.FC<IconType> = ({ height, width
}) => {
    return (
        <Image src="/images/quotation.png" alt="Quotation Open Icon" width={width} height={height} />
    );
};

export default QuotationOpen;
