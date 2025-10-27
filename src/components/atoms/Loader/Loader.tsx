import { ParagraphLoader } from '@/components';

export default function Loader() {
    return (
        <div
            id="global-loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
            <ParagraphLoader />
        </div>
    );
}