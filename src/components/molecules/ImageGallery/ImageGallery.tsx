"use client";

import dynamic from "next/dynamic";
import "react-image-gallery/styles/css/image-gallery.css";
import "@/styles/gallery.css";

const ImageGallery = dynamic(() => import("react-image-gallery"), { ssr: false });

interface ImageGalleryProps {
    images: string[];
}

const CustomImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const galleryItems = images.map((imagePath) => ({
        original: `/${imagePath}`,
        thumbnail: `/${imagePath}`
    }));

    return (
        <div className=" w-full h-full ">
            <ImageGallery
                items={galleryItems}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={true}
                thumbnailPosition="bottom"
                additionalClass="custom-gallery"
                showIndex={false}
                showNav={false}
            />
        </div>
    );
};

export default CustomImageGallery;
